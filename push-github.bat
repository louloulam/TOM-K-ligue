@echo off
cd /d "C:\Users\HP\Desktop\TOM Kéligue"
echo === Ajout des fichiers modifies ===
git add -A
echo === Commit ===
git commit -m "feat: video hero bg, photo Tom, DA violet plus claire, curseur normal"
echo === Push vers GitHub ===
git push origin main
if %errorlevel% neq 0 (
    echo Tentative sur la branche master...
    git push origin master
)
echo.
echo === Done ! Netlify va se mettre a jour automatiquement ===
pause
