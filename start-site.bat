@echo off
cd /d "%~dp0"
echo Starting Cafe Tazza local preview...
py -3 serve.py 2>nul
if errorlevel 1 python serve.py
pause
