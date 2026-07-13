@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found.
  echo Install Node.js before starting the HMI bridge manager.
  echo.
  pause
  exit /b 1
)
start "HMI Bridge Manager" /min cmd /c ""%~dp0start_bridge_manager.bat""
timeout /t 2 /nobreak >nul
start "" "%~dp0index.html"
