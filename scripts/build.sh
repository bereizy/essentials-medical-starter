#!/bin/bash

# ============================================
# 📦 BUILD SCRIPT
# ============================================
# This script creates a final version of your
# website that's ready to put on the internet.
#
# The finished files will be in a folder
# called "dist" (short for "distribution").
#
# HOW TO RUN:
#   1. Open Terminal
#   2. Navigate to your project folder
#   3. Type: ./scripts/build.sh
#   4. Press Enter
# ============================================

echo ""
echo "📦 =================================="
echo "   BUILDING YOUR WEBSITE"
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
    echo "📦 Installing packages first..."
    npm install
    echo ""
fi

echo "🔨 Building your website..."
echo "(This might take a moment)"
echo ""

# Run the build
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 =================================="
    echo "   BUILD SUCCESSFUL!"
    echo "==================================="
    echo ""
    echo "Your website files are ready in the 'dist' folder."
    echo ""
    echo "📁 Location: $(pwd)/dist"
    echo ""
    echo "What's next?"
    echo "  - These files can be uploaded to any web host"
    echo "  - Services like Netlify, Vercel, or Cloudflare Pages"
    echo "    can host these files for free!"
    echo ""
    echo "Want to preview the build? Run:"
    echo "  npm run preview"
    echo ""
else
    echo ""
    echo "❌ =================================="
    echo "   BUILD FAILED"
    echo "==================================="
    echo ""
    echo "Something went wrong. Check the error messages above."
    echo ""
    echo "Common fixes:"
    echo "  1. Run: ./scripts/update.sh"
    echo "  2. Try building again"
    echo ""
fi
