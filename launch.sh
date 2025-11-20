#!/bin/bash

# Carify Health App Launch Script
# This script handles the complete setup and launch of the Carify application

set -e  # Exit on any error

echo "🚀 Starting Carify Health Application..."
echo "========================================"

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

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm and try again."
    exit 1
fi

print_success "npm version: $(npm -v)"

# Navigate to project directory
cd "$(dirname "$0")"
print_status "Working directory: $(pwd)"

# Clean up previous builds and node_modules if they exist
if [ -d "node_modules" ]; then
    print_warning "Cleaning up previous node_modules..."
    rm -rf node_modules
fi

if [ -d "dist" ]; then
    print_warning "Cleaning up previous build..."
    rm -rf dist
fi

# Install dependencies
print_status "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    print_error "Failed to install dependencies"
    exit 1
fi

print_success "Dependencies installed successfully"

# Check TypeScript compilation
print_status "Checking TypeScript compilation..."
npm run check

if [ $? -ne 0 ]; then
    print_warning "TypeScript compilation has warnings, but continuing..."
fi

# Set environment variables
export NODE_ENV=development
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

# Start the development server
print_status "Starting Carify Health development server..."
print_status "The application will be available at: http://localhost:$PORT"
print_status "Press Ctrl+C to stop the server"

echo ""
echo "🏥 Carify Health - AI-Powered Healthcare Solutions"
echo "=================================================="
echo ""

# Start the server with error handling
npm run dev 2>&1 | while IFS= read -r line; do
    # Color code different types of log messages
    if [[ $line == *"ERROR"* ]] || [[ $line == *"error"* ]]; then
        echo -e "${RED}$line${NC}"
    elif [[ $line == *"WARN"* ]] || [[ $line == *"warn"* ]]; then
        echo -e "${YELLOW}$line${NC}"
    elif [[ $line == *"serving on port"* ]] || [[ $line == *"ready"* ]]; then
        echo -e "${GREEN}$line${NC}"
    else
        echo "$line"
    fi
done

# If we reach here, the server has stopped
print_warning "Server has stopped"