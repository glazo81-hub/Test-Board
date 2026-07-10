@echo off
echo.
echo EQP TESTBOARD UPDATE
echo Make sure the test cell is idle before continuing.
echo.
pause
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "C:\EQP-Testboard\Update-Testboard.ps1"
echo.
pause

