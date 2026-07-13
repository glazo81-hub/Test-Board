@echo off
setlocal
cd /d "%~dp0"
title Start HMI

echo Starting HMI Fire & Gas Test Board...
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found.
  echo Install Node.js before starting the HMI.
  echo.
  pause
  exit /b 1
)

echo Starting bridge manager...
start "HMI Bridge Manager" /min cmd /c "node hmi_bridge_manager.js"

echo Waiting for local bridge manager...
timeout /t 2 /nobreak >nul

echo Starting relay and I/O bridges...
powershell -NoProfile -ExecutionPolicy Bypass -Command "try { Invoke-WebRequest -UseBasicParsing 'http://127.0.0.1:8780/start?target=all' | Out-Null; Write-Host 'Bridge services started.' } catch { Write-Host 'Bridge manager is starting. Opened HMI anyway.' }"

echo Opening HMI...
start "" "%~dp0index.html"

echo.
echo HMI started.
echo Use STOP HMI BRIDGES - CLICK ME.cmd when you want to close the bridge services.
echo.
timeout /t 3 /nobreak >nul
