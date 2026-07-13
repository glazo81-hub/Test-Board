@echo off
cd /d "%~dp0"
title HMI Bridge Manager
echo Starting HMI Bridge Manager
echo.
echo Manager URL: http://127.0.0.1:8780/health
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found.
  echo Install Node.js or run this from a PC that has Node.js installed.
  echo.
  pause
  exit /b 1
)
node hmi_bridge_manager.js
echo.
echo HMI bridge manager stopped or failed.
pause
