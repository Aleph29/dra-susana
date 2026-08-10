@echo off
cd /d "C:\Users\alber\Documents\Susana Rodriguez\dra-susana"
echo.
echo === Subiendo cambios del sitio a GitHub ===
echo.
git add .
git commit -m "Cambios actualizados"
git push origin main
echo.
echo === Listo! Vercel desplegara los cambios en ~1 minuto ===
echo.
pause
