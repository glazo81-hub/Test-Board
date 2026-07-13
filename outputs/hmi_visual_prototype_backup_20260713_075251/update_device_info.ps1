$ErrorActionPreference = "Stop"

$root = $PSScriptRoot
$assetRoot = Join-Path $root "assets\device-info"
$configPath = Join-Path $root "config\device-info.json"
$categories = [ordered]@{
  manuals = @{
    folder = "manuals"
    extensions = @(".pdf", ".doc", ".docx", ".txt")
  }
  wiring = @{
    folder = "wiring"
    extensions = @(".pdf", ".jpg", ".jpeg", ".png", ".webp")
  }
  photos = @{
    folder = "photos"
    extensions = @(".jpg", ".jpeg", ".png", ".webp")
  }
  procedures = @{
    folder = "procedures"
    extensions = @(".pdf", ".doc", ".docx", ".txt")
  }
  specs = @{
    folder = "specs"
    extensions = @(".pdf", ".doc", ".docx", ".txt")
  }
  videos = @{
    folder = "videos"
    extensions = @(".mp4", ".webm", ".mov", ".m4v")
  }
}
$reservedRootFolders = @("manuals", "wiring", "photos", "procedures", "specs", "videos")

function ConvertTo-OrderedObject {
  param([Parameter(ValueFromPipeline = $true)] $InputObject)

  if ($null -eq $InputObject) { return $null }
  if ($InputObject -is [System.Collections.IEnumerable] -and $InputObject -isnot [string] -and $InputObject -isnot [pscustomobject]) {
    return @($InputObject | ForEach-Object { ConvertTo-OrderedObject $_ })
  }
  if ($InputObject -is [pscustomobject]) {
    $hash = [ordered]@{}
    foreach ($property in $InputObject.PSObject.Properties) {
      $hash[$property.Name] = ConvertTo-OrderedObject $property.Value
    }
    return $hash
  }
  return $InputObject
}

function Get-TitleFromFile {
  param([string] $Name)
  $baseName = [System.IO.Path]::GetFileNameWithoutExtension($Name)
  $title = ($baseName -replace "[-_]+", " ") -replace "\s+", " "
  return (Get-Culture).TextInfo.ToTitleCase($title.Trim().ToLower())
}

function Get-WebPath {
  param([string] $FullName)
  $rootPath = (Resolve-Path -LiteralPath $root).Path.TrimEnd("\")
  $fullPath = (Resolve-Path -LiteralPath $FullName).Path
  $relative = $fullPath.Substring($rootPath.Length).TrimStart("\")
  return ($relative -replace "\\", "/")
}

function Get-CategoryItems {
  param(
    [string] $FolderPath,
    [string[]] $Extensions
  )

  if (!(Test-Path -LiteralPath $FolderPath)) { return @() }

  return @(
    Get-ChildItem -LiteralPath $FolderPath -File |
      Where-Object { $Extensions -contains $_.Extension.ToLowerInvariant() } |
      Sort-Object Name |
      ForEach-Object {
        [ordered]@{
          title = Get-TitleFromFile $_.Name
          file = Get-WebPath $_.FullName
          description = $_.Name
        }
      }
  )
}

New-Item -ItemType Directory -Force -Path $assetRoot | Out-Null
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $configPath) | Out-Null

if (Test-Path -LiteralPath $configPath) {
  $config = Get-Content -LiteralPath $configPath -Raw | ConvertFrom-Json | ConvertTo-OrderedObject
} else {
  $config = [ordered]@{
    project = [ordered]@{
      name = "EQP Test Cell Fire & Gas Simulation"
      controller = ""
      description = "Device information library generated from assets/device-info."
    }
    updatedBy = "update_device_info.bat"
    devices = [ordered]@{}
  }
}

if (!$config.Contains("project")) { $config["project"] = [ordered]@{} }
if (!$config.Contains("devices")) { $config["devices"] = [ordered]@{} }

$tagFolders = Get-ChildItem -LiteralPath $assetRoot -Directory |
  Where-Object { $_.Name -notmatch "^_" -and $reservedRootFolders -notcontains $_.Name } |
  Sort-Object Name

foreach ($reservedName in $reservedRootFolders) {
  if ($config.devices.Contains($reservedName)) {
    $config.devices.Remove($reservedName)
  }
}

foreach ($tagFolder in $tagFolders) {
  $tag = $tagFolder.Name
  if (!$config.devices.Contains($tag)) {
    $config.devices[$tag] = [ordered]@{
      manufacturer = "TBD"
      manufacturerPartNumber = ""
      gePartNumber = ""
      wfePartNumber = ""
      description = ""
      specifications = ""
      notes = ""
      eolResistor = ""
      shopTestProcedure = ""
      inspectionSticker = ""
      manuals = @()
      wiring = @()
      photos = @()
      procedures = @()
      specs = @()
      videos = @()
    }
  }

  foreach ($categoryName in $categories.Keys) {
    $category = $categories[$categoryName]
    $folderPath = Join-Path $tagFolder.FullName $category.folder
    New-Item -ItemType Directory -Force -Path $folderPath | Out-Null
    $config.devices[$tag][$categoryName] = @(Get-CategoryItems -FolderPath $folderPath -Extensions $category.extensions)
  }
}

$config["updatedBy"] = "update_device_info.bat"
$config["updatedAt"] = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")

$json = $config | ConvertTo-Json -Depth 10
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($configPath, $json, $utf8NoBom)

Write-Host "Device INFO library updated."
Write-Host "Scanned tag folders:" $tagFolders.Count
Write-Host "Output:" $configPath
Write-Host ""
Write-Host "Folder format:"
Write-Host "assets\device-info\<TAG>\manuals"
Write-Host "assets\device-info\<TAG>\photos"
Write-Host "assets\device-info\<TAG>\videos"
