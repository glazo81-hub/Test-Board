@echo off
cd /d "%~dp0"
echo Stopping local HMI bridge services on ports 8765, 8771, and 8780...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-NetTCPConnection -LocalPort 8765,8771,8780 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force }"
echo.
echo Done. You can now start fresh with:
echo START HMI AUTO BRIDGES - CLICK ME.cmd
echo.
pause
