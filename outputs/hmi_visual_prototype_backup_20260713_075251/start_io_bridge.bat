@echo off
cd /d "%~dp0"
title I/O Bridge - Panel 1 and Panel 2
echo Starting I/O Bridge
echo.
echo I/O Module-1: 192.168.1.202:502
echo I/O Module-2: 192.168.1.203:502
echo Local bridge: http://127.0.0.1:8771/health?module=io1
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found.
  echo Install Node.js or run this from a PC that has Node.js installed.
  echo.
  pause
  exit /b 1
)
node io_bridge.js
echo.
echo I/O bridge stopped or failed.
pause
