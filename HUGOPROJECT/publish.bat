@echo off
IF [%1] == [] GOTO nomessage

git add .
git commit -a -m %1%
git push

GOTO end
:nomessage
echo Usage: publish ^<message^>
:end