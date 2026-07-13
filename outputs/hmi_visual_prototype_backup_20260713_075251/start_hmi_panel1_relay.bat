@echo off
cd /d "%~dp0"
start "Relay Bridge - Panel 1" /min node relay_bridge.js
timeout /t 2 /nobreak >nul
start "" "%~dp0index.html"
