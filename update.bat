@echo off
git add .
git commit -m "SQL Upload & 2 files"
git pull origin main --rebase
git push origin main
echo ✅ Update complete! Check your website in a few minutes. 🚀
pause
