# EQP Testboard deployment

The development PC publishes tested commits to the private GitHub repository.
The testboard PC runs only the `main` branch and updates through
`deployment/Update-Testboard.ps1`.

## First installation on the testboard PC

1. Install Git for Windows.
2. Open PowerShell as the normal testboard user.
3. Run `deployment/Install-Testboard.ps1 -RepositoryUrl <private-repository-url>`.
4. Start the HMI from `C:\EQP-Testboard\current\outputs\hmi_visual_prototype`.

## Updating

Run `C:\EQP-Testboard\Update-Testboard.ps1` only while the test cell is idle.
The script downloads into a staging folder, validates the essential application
files, preserves the previous release, and only then switches `current`.

Machine-specific serial ports, relay mappings, logs, and runtime data must be
stored under `C:\EQP-Testboard\machine-config` or
`C:\EQP-Testboard\runtime-data`; these folders are never replaced by an update.

