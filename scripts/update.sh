#!/bin/bash

# ============================================
# 🔄 UPDATE SCRIPT
# ============================================
# This script updates all your website packages
# to the latest versions.
#
# HOW TO RUN:
#   1. Open Terminal
#   2. Navigate to your project folder
#   3. Type: ./scripts/update.sh
#   4. Press Enter
# ============================================

echo ""
echo "🔄 =================================="
echo "   WEBSITE UPDATE SCRIPT"
echo "==================================="
echo ""

# Move to the project directory (in case we're somewhere else)
cd "$(dirname "$0")/.." || exit

echo "📁 Working in: $(pwd)"
echo ""

# Step 1: Check if npm is installed
echo "Step 1: Checking if npm is installed..."
if ! command -v npm &> /dev/null; then
    echo ""
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
echo "✅ npm is installed!"
echo ""

# Step 2: Update npm packages
echo "Step 2: Checking for package updates..."
echo "(This might take a minute)"
echo ""

npm update

echo ""
echo "✅ Packages updated!"
echo ""

# Step 3: Check for outdated packages
echo "Step 3: Checking if any packages are outdated..."
echo ""

OUTDATED=$(npm outdated 2>/dev/null)

if [ -z "$OUTDATED" ]; then
    echo "✅ All packages are up to date!"
else
    echo "📦 Some packages have newer major versions available:"
    echo ""
    npm outdated
    echo ""
    echo "💡 TIP: Major updates might change how things work."
    echo "   Only update these if you know what you're doing,"
    echo "   or ask your web administrator for help."
fi

echo ""

# Step 4: Clean up
echo "Step 4: Cleaning up..."
npm cache clean --force 2>/dev/null

echo ""
echo "🎉 =================================="
echo "   UPDATE COMPLETE!"
echo "==================================="
echo ""
echo "What to do next:"
echo "  1. Start your website: npm run dev"
echo "  2. Check that everything looks good"
echo "  3. You're done!"
echo ""
