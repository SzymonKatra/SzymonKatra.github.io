@echo off
echo SCSS:
start cmd.exe /c sass static/style.scss static/style.css --trace
echo.
echo PL:
hugo
echo.
echo EN:
hugo --config="config_en.yaml"