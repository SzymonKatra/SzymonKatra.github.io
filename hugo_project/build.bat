@echo off
echo SCSS:
start cmd.exe /c sass dynamic/style.scss static/style.css --trace
echo.
echo PL:
hugo
echo.
echo EN:
hugo --config="config_en.yaml"