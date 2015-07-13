@echo off
echo SCSS:
start sass static/style.scss static/style.css --trace
echo.
echo PL:
hugo
echo.
echo EN:
hugo --config="config_en.yaml"