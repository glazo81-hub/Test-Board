@echo off
cd /d "%~dp0"
title Relay Bridge - Panel 1
echo Starting Relay Bridge - Panel 1
echo.
echo Target relay module: 192.168.1.200:4196
echo Local bridge URL:   http://127.0.0.1:8765/health
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found.
  echo Install Node.js or run this from a PC that has Node.js installed.
  echo.
  pause
  exit /b 1
)
node relay_bridge.js
echo.
echo Relay bridge stopped or failed.
pause
