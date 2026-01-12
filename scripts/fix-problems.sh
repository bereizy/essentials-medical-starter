#!/bin/bash

# ============================================
# 🔧 FIX PROBLEMS SCRIPT
# ============================================
# Having issues? This script tries to fix
# common problems automatically.
#
# WHAT IT DOES:
#   - Removes old package files
#   - Reinstalls everything fresh
#   - Clears out cached data
#
# HOW TO RUN:
#   1. Open Terminal
#   2. Navigate to your project folder
#   3. Type: ./scripts/fix-problems.sh
#   4. Press Enter
# ============================================

echo ""
echo "🔧 =================================="
echo "   FIX PROBLEMS SCRIPT"
echo "==================================="
echo ""

# Move to the project directory
cd "$(dirname "$0")/.." || exit

echo "📁 Working in: $(pwd)"
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

echo "This script will:"
echo "  1. Remove old installed packages"
echo "  2. Clear the cache"
echo "  3. Install everything fresh"
echo ""
echo "This is safe and won't delete your work!"
echo ""
read -p "Continue? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
    echo ""
    echo "Cancelled. No changes made."
    echo ""
    exit 0
fi

echo ""
echo "Step 1: Removing old packages..."
rm -rf node_modules
rm -f package-lock.json
echo "✅ Done!"
echo ""

echo "Step 2: Clearing npm cache..."
npm cache clean --force 2>/dev/null
echo "✅ Done!"
echo ""

echo "Step 3: Installing fresh packages..."
echo "(This might take a few minutes)"
echo ""
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 =================================="
    echo "   ALL FIXED!"
    echo "==================================="
    echo ""
    echo "Everything has been reinstalled fresh."
    echo ""
    echo "Try starting your website now:"
    echo "  ./scripts/start.sh"
    echo ""
    echo "Or just run:"
    echo "  npm run dev"
    echo ""
else
    echo ""
    echo "❌ Something went wrong during installation."
    echo ""
    echo "Try these steps:"
    echo "  1. Check your internet connection"
    echo "  2. Run this script again"
    echo "  3. If it still fails, ask for help"
    echo ""
fi
