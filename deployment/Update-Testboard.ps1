param(
  [string]$InstallRoot = "C:\EQP-Testboard",
  [string]$GitExecutable = ""
)

$ErrorActionPreference = "Stop"
$repositoryFile = Join-Path $InstallRoot "repository-url.txt"
$stagingRoot = Join-Path $InstallRoot "staging"
$current = Join-Path $InstallRoot "current"
$previous = Join-Path $InstallRoot "previous"
$gitPathFile = Join-Path $InstallRoot "git-path.txt"

if (-not (Test-Path -LiteralPath $repositoryFile)) {
  throw "Missing $repositoryFile. Run Install-Testboard.ps1 first."
}

$repositoryUrl = (Get-Content -LiteralPath $repositoryFile -Raw).Trim()
if (-not $repositoryUrl) { throw "The repository URL is empty." }

if (-not $GitExecutable -and (Test-Path -LiteralPath $gitPathFile)) {
  $GitExecutable = (Get-Content -LiteralPath $gitPathFile -Raw).Trim()
}
if (-not $GitExecutable) {
  $gitCommand = Get-Command git -ErrorAction SilentlyContinue
  if ($gitCommand) { $GitExecutable = $gitCommand.Source }
}
if (-not $GitExecutable -or -not (Test-Path -LiteralPath $GitExecutable)) {
  throw "Git for Windows was not found. Install Git or pass -GitExecutable with its full path."
}

if (Test-Path -LiteralPath $stagingRoot) {
  Remove-Item -LiteralPath $stagingRoot -Recurse -Force
}

Write-Host "Downloading the approved main branch..."
& $GitExecutable clone --depth 1 --branch main $repositoryUrl $stagingRoot
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

# Keep the root updater and click-to-run commands synchronized with the release.
$releaseDeployment = Join-Path $current "deployment"
if (Test-Path -LiteralPath (Join-Path $releaseDeployment "Update-Testboard.ps1")) {
  Copy-Item -LiteralPath (Join-Path $releaseDeployment "Update-Testboard.ps1") -Destination (Join-Path $InstallRoot "Update-Testboard.ps1") -Force
}
foreach ($commandFile in @("START TESTBOARD HMI.cmd", "UPDATE TESTBOARD.cmd")) {
  $sourceCommand = Join-Path $releaseDeployment $commandFile
  if (Test-Path -LiteralPath $sourceCommand) {
    Copy-Item -LiteralPath $sourceCommand -Destination (Join-Path $InstallRoot $commandFile) -Force
  }
}

$versionFile = Join-Path $current "VERSION"
$version = if (Test-Path -LiteralPath $versionFile) { (Get-Content -LiteralPath $versionFile -Raw).Trim() } else { "unknown" }
Write-Host "Testboard updated successfully to version $version."
