@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found.
  echo Install Node.js before starting the relay bridge.
  echo.
  pause
  exit /b 1
)
start "Relay Bridge - Panel 1" /min cmd /c ""%~dp0start_relay_bridge.bat""
timeout /t 2 /nobreak >nul
start "" "%~dp0index.html"
