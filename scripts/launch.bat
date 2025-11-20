@echo off
setlocal enabledelayedexpansion

REM Carify Health App Launch Script for Windows
REM This script handles the complete setup and launch of the Carify application

echo.
echo 🚀 Starting Carify Health Application...
echo ========================================

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18+ and try again.
    pause
    exit /b 1
)

echo [SUCCESS] Node.js version: 
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm is not installed. Please install npm and try again.
    pause
    exit /b 1
)

echo [SUCCESS] npm version: 
npm --version

REM Navigate to project root directory (parent of scripts)
cd /d "%~dp0\.."
echo [INFO] Working directory: %CD%

REM Clean up previous builds and node_modules if they exist
if exist "node_modules" (
    echo [WARNING] Cleaning up previous node_modules...
    rmdir /s /q "node_modules"
)

if exist "dist" (
    echo [WARNING] Cleaning up previous build...
    rmdir /s /q "dist"
)

REM Install dependencies
echo [INFO] Installing dependencies...
call npm install

if errorlevel 1 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)

echo [SUCCESS] Dependencies installed successfully

REM Check TypeScript compilation
echo [INFO] Checking TypeScript compilation...
call npm run check

if errorlevel 1 (
    echo [WARNING] TypeScript compilation has warnings, but continuing...
)

REM Set environment variables
set NODE_ENV=development
if not defined PORT set PORT=5000

echo [INFO] Environment: %NODE_ENV%
echo [INFO] Port: %PORT%

REM Start the development server
echo [INFO] Starting Carify Health development server...
echo [INFO] The application will be available at: http://localhost:%PORT%
echo [INFO] Press Ctrl+C to stop the server
echo.
echo 🏥 Carify Health - AI-Powered Healthcare Solutions
echo ==================================================
echo.

REM Start the server
call npm run dev

REM If we reach here, the server has stopped
echo [WARNING] Server has stopped
pause