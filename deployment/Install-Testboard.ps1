param(
  [Parameter(Mandatory = $true)]
  [string]$RepositoryUrl,
  [string]$InstallRoot = "C:\EQP-Testboard"
)

$ErrorActionPreference = "Stop"
$updateScript = Join-Path $PSScriptRoot "Update-Testboard.ps1"

New-Item -ItemType Directory -Force -Path $InstallRoot | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $InstallRoot "machine-config") | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $InstallRoot "runtime-data") | Out-Null

Copy-Item -LiteralPath $updateScript -Destination (Join-Path $InstallRoot "Update-Testboard.ps1") -Force
Set-Content -LiteralPath (Join-Path $InstallRoot "repository-url.txt") -Value $RepositoryUrl -Encoding UTF8

& (Join-Path $InstallRoot "Update-Testboard.ps1") -InstallRoot $InstallRoot

