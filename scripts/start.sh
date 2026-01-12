#!/bin/bash

# ============================================
# 🚀 START SCRIPT
# ============================================
# This script starts your website so you can
# see it in your web browser.
#
# HOW TO RUN:
#   1. Open Terminal
#   2. Navigate to your project folder
#   3. Type: ./scripts/start.sh
#   4. Press Enter
#
# HOW TO STOP:
#   Press Ctrl + C in the Terminal
# ============================================

echo ""
echo "🚀 =================================="
echo "   STARTING YOUR WEBSITE"
echo "==================================="
echo ""

# Move to the project directory
cd "$(dirname "$0")/.." || exit

echo "📁 Project folder: $(pwd)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ ERROR: npm is not installed!"
    echo ""
    echo "To fix this:"
    echo "  1. Go to https://nodejs.org"
    echo "  2. Download the LTS version"
    echo "  3. Install it"
    echo "  4. Close and reopen Terminal"
    echo "  5. Run this script again"
    echo ""
    exit 1
fi

# Check if packages are installed
if [ ! -d "node_modules" ]; then
    echo "📦 First time setup - installing packages..."
    echo "(This only happens once and might take a minute)"
    echo ""
    npm install
    echo ""
fi

echo "🌐 Starting the development server..."
echo ""
echo "==================================="
echo "When you see a link like:"
echo "  http://localhost:4321/"
echo ""
echo "Click it or copy it into your browser!"
echo "==================================="
echo ""
echo "To STOP the server, press: Ctrl + C"
echo ""

# Start the development server
npm run dev
