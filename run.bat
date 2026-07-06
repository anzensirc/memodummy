@echo off
title Memo Launcher

echo Starting Backend...

start "Memo Backend" cmd /k "cd /d F:\Memo\backend && npm run dev"

timeout /t 3 >nul

echo Starting Frontend...

start "Memo Frontend" cmd /k "cd /d F:\Memo\frontend && npm run dev"

timeout /t 5 >nul

start http://localhost:5173

exit