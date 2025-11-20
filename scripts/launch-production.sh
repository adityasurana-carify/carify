#!/bin/bash

# Carify Health App Production Launch Script
# This script builds and launches the Carify application in production mode

set -e  # Exit on any error

echo "🚀 Starting Carify Health Application (Production)..."
echo "===================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version: $(node -v)"

# Navigate to project root directory (parent of scripts)
cd "$(dirname "$0")/.."
print_status "Working directory: $(pwd)"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
    
    if [ $? -ne 0 ]; then
        print_error "Failed to install dependencies"
        exit 1
    fi
    
    print_success "Dependencies installed successfully"
fi

# Check TypeScript compilation
print_status "Checking TypeScript compilation..."
npm run check

if [ $? -ne 0 ]; then
    print_error "TypeScript compilation failed"
    exit 1
fi

# Build the application
print_status "Building application for production..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Build failed"
    exit 1
fi

print_success "Build completed successfully"

# Set environment variables
export NODE_ENV=production
export PORT=${PORT:-5000}

print_status "Environment: $NODE_ENV"
print_status "Port: $PORT"

# Function to handle cleanup on script exit
cleanup() {
    print_warning "Shutting down Carify application..."
    # Kill any background processes
    jobs -p | xargs -r kill
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start the production server
print_status "Starting Carify Health production server..."
print_status "The application will be available at: http://localhost:$PORT"
print_status "Press Ctrl+C to stop the server"

echo ""
echo "🏥 Carify Health - AI-Powered Healthcare Solutions (Production)"
echo "=============================================================="
echo ""

# Start the server
npm start

# If we reach here, the server has stopped
print_warning "Server has stopped"