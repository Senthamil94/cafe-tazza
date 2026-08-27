@echo off
cd /d "%~dp0"
echo Downloading Cafe Tazza photos into the images folder...
python _download_images.py
if errorlevel 1 (
  echo.
  echo Download failed. Open this folder and check your internet connection, then run this file again.
)
echo.
pause
