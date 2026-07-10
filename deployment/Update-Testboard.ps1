param(
  [string]$InstallRoot = "C:\EQP-Testboard"
)

$ErrorActionPreference = "Stop"
$repositoryFile = Join-Path $InstallRoot "repository-url.txt"
$stagingRoot = Join-Path $InstallRoot "staging"
$current = Join-Path $InstallRoot "current"
$previous = Join-Path $InstallRoot "previous"

if (-not (Test-Path -LiteralPath $repositoryFile)) {
  throw "Missing $repositoryFile. Run Install-Testboard.ps1 first."
}

$repositoryUrl = (Get-Content -LiteralPath $repositoryFile -Raw).Trim()
if (-not $repositoryUrl) { throw "The repository URL is empty." }

if (Test-Path -LiteralPath $stagingRoot) {
  Remove-Item -LiteralPath $stagingRoot -Recurse -Force
}

Write-Host "Downloading the approved main branch..."
git clone --depth 1 --branch main $repositoryUrl $stagingRoot
if ($LASTEXITCODE -ne 0) { throw "Git clone failed." }

$requiredFiles = @(
  "outputs\hmi_visual_prototype\index.html",
  "outputs\hmi_visual_prototype\app.js",
  "outputs\hmi_visual_prototype\styles.css"
)

foreach ($relativePath in $requiredFiles) {
  if (-not (Test-Path -LiteralPath (Join-Path $stagingRoot $relativePath))) {
    throw "Update validation failed: missing $relativePath"
  }
}

if (Test-Path -LiteralPath $previous) {
  Remove-Item -LiteralPath $previous -Recurse -Force
}
if (Test-Path -LiteralPath $current) {
  Move-Item -LiteralPath $current -Destination $previous
}
Move-Item -LiteralPath $stagingRoot -Destination $current

$versionFile = Join-Path $current "VERSION"
$version = if (Test-Path -LiteralPath $versionFile) { (Get-Content -LiteralPath $versionFile -Raw).Trim() } else { "unknown" }
Write-Host "Testboard updated successfully to version $version."

