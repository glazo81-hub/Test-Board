@echo off
cd /d "%~dp0"
title Test EQP Modbus RTU

echo Testing EQP Modbus RTU on COM12...
echo.
echo Default scan:
echo   COM12
echo   19200 baud
echo   Slave ID 1
echo   Map: EQP_ON_TEST-modbus.csv
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0test_eqp_modbus_rtu.ps1" -PortName COM12 -BaudRates 19200 -SlaveIds 1 -MapPath "%~dp0config\eqp_on_test_modbus_map.csv"
