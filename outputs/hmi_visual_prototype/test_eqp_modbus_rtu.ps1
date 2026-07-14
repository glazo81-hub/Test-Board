param(
  [string]$PortName = "COM12",
  [int[]]$BaudRates = @(9600, 19200, 38400),
  [int[]]$SlaveIds = @(1),
  [int[]]$StartRegisters = @(0, 1, 100, 4000),
  [int]$Quantity = 8,
  [int]$TimeoutMs = 900,
  [string]$MapPath = "$PSScriptRoot\config\eqp_modbus_map.csv",
  [int]$MaxMapTests = 18
)

$ErrorActionPreference = "Stop"

function Get-Crc16Modbus {
  param([byte[]]$Bytes)
  [int]$crc = 0xFFFF
  foreach ($b in $Bytes) {
    $crc = $crc -bxor $b
    for ($i = 0; $i -lt 8; $i++) {
      if (($crc -band 1) -ne 0) {
        $crc = ($crc -shr 1) -bxor 0xA001
      } else {
        $crc = $crc -shr 1
      }
    }
  }
  return @([byte]($crc -band 0xFF), [byte](($crc -shr 8) -band 0xFF))
}

function Format-Hex {
  param([byte[]]$Bytes)
  if (-not $Bytes -or $Bytes.Length -eq 0) { return "" }
  return ($Bytes | ForEach-Object { $_.ToString("X2") }) -join " "
}

function New-ReadFrame {
  param(
    [int]$SlaveId,
    [int]$Function,
    [int]$StartRegister,
    [int]$Quantity
  )
  [byte[]]$body = @(
    [byte]$SlaveId,
    [byte]$Function,
    [byte](($StartRegister -shr 8) -band 0xFF),
    [byte]($StartRegister -band 0xFF),
    [byte](($Quantity -shr 8) -band 0xFF),
    [byte]($Quantity -band 0xFF)
  )
  [byte[]]$crc = Get-Crc16Modbus $body
  return [byte[]]($body + $crc)
}

function Test-ResponseCrc {
  param([byte[]]$Bytes)
  if (-not $Bytes -or $Bytes.Length -lt 5) { return $false }
  [byte[]]$body = $Bytes[0..($Bytes.Length - 3)]
  [byte[]]$expected = Get-Crc16Modbus $body
  return ($Bytes[$Bytes.Length - 2] -eq $expected[0] -and $Bytes[$Bytes.Length - 1] -eq $expected[1])
}

function Invoke-ModbusRead {
  param(
    [System.IO.Ports.SerialPort]$Serial,
    [int]$SlaveId,
    [int]$Function,
    [int]$StartRegister,
    [int]$Quantity
  )
  [byte[]]$tx = New-ReadFrame -SlaveId $SlaveId -Function $Function -StartRegister $StartRegister -Quantity $Quantity
  $Serial.DiscardInBuffer()
  $Serial.DiscardOutBuffer()
  $Serial.Write($tx, 0, $tx.Length)

  $deadline = [DateTime]::UtcNow.AddMilliseconds($Serial.ReadTimeout + 150)
  $rx = New-Object System.Collections.Generic.List[byte]

  while ([DateTime]::UtcNow -lt $deadline) {
    while ($Serial.BytesToRead -gt 0) {
      $rx.Add([byte]$Serial.ReadByte())
    }
    if ($rx.Count -ge 5) {
      if (($rx[1] -band 0x80) -ne 0 -and $rx.Count -ge 5) { break }
      if ($rx.Count -ge 3) {
        $expectedLength = 3 + [int]$rx[2] + 2
        if ($rx.Count -ge $expectedLength) { break }
      }
    }
    Start-Sleep -Milliseconds 20
  }

  [byte[]]$rxBytes = $rx.ToArray()
  return [pscustomobject]@{
    SlaveId = $SlaveId
    Function = $Function
    StartRegister = $StartRegister
    Tx = Format-Hex $tx
    Rx = Format-Hex $rxBytes
    RxLength = $rxBytes.Length
    CrcOk = Test-ResponseCrc $rxBytes
    ExceptionCode = if ($rxBytes.Length -ge 5 -and (($rxBytes[1] -band 0x80) -ne 0)) { $rxBytes[2] } else { $null }
  }
}

function Get-EqpMapTests {
  param([string]$Path, [int]$Limit)
  if (-not (Test-Path -LiteralPath $Path)) { return @() }

  $priority = "FPP\.|FIRE_SHUTDOWN|LOW_GAS|HI_HI|FAULT|AGENT_RELEASED|PULL_STATION|HEAT_|IR_GAS|UD10_GAS"
  $tests = New-Object System.Collections.Generic.List[object]

  foreach ($line in Get-Content -LiteralPath $Path) {
    $trimmed = $line.Trim()
    if (-not $trimmed -or $trimmed.StartsWith(";")) { continue }
    $parts = $trimmed.Split(",")
    if ($parts.Count -lt 2) { continue }

    $name = $parts[0].Trim()
    $addressText = $parts[1].Trim()
    if ($addressText -notmatch "^\d+$") { continue }
    $address = [int]$addressText
    if ($name -notmatch $priority) { continue }

    if ($address -lt 10000) {
      foreach ($fn in @(1, 2)) {
        $tests.Add([pscustomobject]@{
          Name = $name
          DisplayAddress = $addressText
          Function = $fn
          StartRegister = [Math]::Max(0, $address - 1)
          Quantity = 1
          Type = "Bit"
        })
      }
    } elseif ($address -ge 40001 -and $address -lt 50000) {
      foreach ($fn in @(3, 4)) {
        $tests.Add([pscustomobject]@{
          Name = $name
          DisplayAddress = $addressText
          Function = $fn
          StartRegister = $address - 40001
          Quantity = 1
          Type = "Register"
        })
      }
    }

    if ($tests.Count -ge $Limit) { break }
  }

  return $tests.ToArray()
}

Write-Host "EQP Modbus RTU Probe" -ForegroundColor Cyan
Write-Host "Port: $PortName"
Write-Host "Baud scan: $($BaudRates -join ', ')"
Write-Host "Slave scan: $($SlaveIds -join ', ')"
Write-Host "Map: $MapPath"
Write-Host ""
Write-Host "Wiring reminder: RS485 A/B must match the EQP Modbus port. If no response, swap A and B once." -ForegroundColor Yellow
Write-Host ""

$hits = @()
$mapTests = Get-EqpMapTests -Path $MapPath -Limit $MaxMapTests
if ($mapTests.Count -gt 0) {
  Write-Host "Using EQP map tests:" -ForegroundColor Cyan
  $mapTests | Select-Object Name,DisplayAddress,Function,StartRegister,Quantity | Format-Table -AutoSize
} else {
  Write-Host "No map tests loaded. Falling back to generic holding/input register scan." -ForegroundColor Yellow
}

foreach ($baud in $BaudRates) {
  Write-Host "Testing $PortName at $baud 8N1..." -ForegroundColor DarkCyan
  $serial = New-Object System.IO.Ports.SerialPort $PortName, $baud, ([System.IO.Ports.Parity]::None), 8, ([System.IO.Ports.StopBits]::One)
  $serial.ReadTimeout = $TimeoutMs
  $serial.WriteTimeout = $TimeoutMs
  try {
    $serial.Open()
    foreach ($slave in $SlaveIds) {
      if ($mapTests.Count -gt 0) {
        foreach ($test in $mapTests) {
          $result = Invoke-ModbusRead -Serial $serial -SlaveId $slave -Function $test.Function -StartRegister $test.StartRegister -Quantity $test.Quantity
          if ($result.RxLength -gt 0) {
            $hits += [pscustomobject]@{
              Baud = $baud
              Slave = $slave
              Name = $test.Name
              Address = $test.DisplayAddress
              Function = $test.Function
              StartRegister = $test.StartRegister
              CrcOk = $result.CrcOk
              ExceptionCode = $result.ExceptionCode
              Tx = $result.Tx
              Rx = $result.Rx
            }
            $color = if ($result.CrcOk) { "Green" } else { "Yellow" }
            Write-Host "  RESPONSE baud=$baud slave=$slave $($test.Name) addr=$($test.DisplayAddress) fn=$($test.Function) crc=$($result.CrcOk)" -ForegroundColor $color
            Write-Host "    TX: $($result.Tx)"
            Write-Host "    RX: $($result.Rx)"
          } else {
            Write-Host "  no response slave=$slave $($test.Name) addr=$($test.DisplayAddress) fn=$($test.Function)" -ForegroundColor DarkGray
          }
        }
      } else {
        foreach ($fn in @(3, 4)) {
          foreach ($reg in $StartRegisters) {
            $result = Invoke-ModbusRead -Serial $serial -SlaveId $slave -Function $fn -StartRegister $reg -Quantity $Quantity
            if ($result.RxLength -gt 0) {
              $hits += [pscustomobject]@{
                Baud = $baud
                Slave = $slave
                Name = "Generic"
                Address = $reg
                Function = $fn
                StartRegister = $reg
                CrcOk = $result.CrcOk
                ExceptionCode = $result.ExceptionCode
                Tx = $result.Tx
                Rx = $result.Rx
              }
              $color = if ($result.CrcOk) { "Green" } else { "Yellow" }
              Write-Host "  RESPONSE baud=$baud slave=$slave fn=$fn reg=$reg crc=$($result.CrcOk)" -ForegroundColor $color
              Write-Host "    TX: $($result.Tx)"
              Write-Host "    RX: $($result.Rx)"
            } else {
              Write-Host "  no response slave=$slave fn=$fn reg=$reg" -ForegroundColor DarkGray
            }
          }
        }
      }
    }
  } catch {
    Write-Host "  ERROR: $($_.Exception.Message)" -ForegroundColor Red
  } finally {
    if ($serial.IsOpen) { $serial.Close() }
    $serial.Dispose()
  }
}

Write-Host ""
if ($hits.Count -gt 0) {
  Write-Host "Modbus RTU response detected." -ForegroundColor Green
  $hits | Format-Table -AutoSize
} else {
  Write-Host "No Modbus RTU response detected." -ForegroundColor Red
  Write-Host "Check: EQP Modbus RTU enabled, correct slave ID, baud rate, A/B polarity, common reference/shield, and 120 ohm termination if required."
}

Write-Host ""
Read-Host "Press ENTER to close"
