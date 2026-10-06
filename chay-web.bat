@echo off
setlocal
cd /d "%~dp0"

echo Dang khoi dong web hoc tieng Anh...
echo.

if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd" (
  "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd" install
  "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd" exec vite --host 0.0.0.0
) else (
  where pnpm >nul 2>nul
  if %errorlevel%==0 (
    pnpm install
    pnpm exec vite --host 0.0.0.0
  ) else (
    echo Khong tim thay pnpm.
    echo Hay cai Node.js va pnpm, hoac mo lai bang Codex de dung runtime co san.
    pause
  )
)

endlocal
