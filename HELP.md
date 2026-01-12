# 🆘 Help Guide

This guide explains common tasks in simple terms. No coding experience needed!

---

## 📖 Table of Contents

1. [What is Terminal?](#what-is-terminal)
2. [How to Update Your Website](#how-to-update-your-website)
3. [How to Change Your Business Info](#how-to-change-your-business-info)
4. [How to See Your Website](#how-to-see-your-website)
5. [Common Problems & Fixes](#common-problems--fixes)

---

## What is Terminal?

Terminal is like a text message conversation with your computer. Instead of clicking buttons, you type commands.

### How to Open Terminal on Mac

1. Press `Cmd + Space` (opens Spotlight search)
2. Type `Terminal`
3. Press `Enter`

A window with text will appear. This is Terminal!

### How to Open Terminal on Windows

1. Press `Windows key + R`
2. Type `cmd` or `powershell`
3. Press `Enter`

---

## How to Update Your Website

Over time, the tools that power your website get improvements. Updating keeps your site fast and secure.

### The Easy Way (Recommended)

1. Open Terminal
2. Go to your project folder:
   ```
   cd ~/path/to/your-project-folder
   ```
   💡 **Tip:** Drag your project folder from Finder into Terminal to auto-fill the path!
3. Run the update script:
   ```
   ./scripts/update.sh
   ```
4. That's it! The script does everything for you.

### What the Update Does

- ✅ Checks for newer versions of website tools
- ✅ Downloads and installs updates
- ✅ Keeps everything working together

---

## How to Change Your Business Info

All your business information is stored in one file. Think of it like a settings page for your website.

### Step 1: Find the File

The file is located at:
```
src/config/siteConfig.ts
```

### Step 2: Open the File

You can open it with:
- **TextEdit** (Mac) - Right-click the file → Open With → TextEdit
- **VS Code** (Recommended) - If you have it installed
- **Any text editor**

### Step 3: Make Changes

Find the section you want to change. Here are examples:

#### Change Your Business Name
Find this line:
```
businessName: "Oakridge Family Dentistry",
```
Change the text inside the quotes to your business name.

#### Change Your Phone Number
Find this line:
```
phone: "(919) 555-0142",
```
Replace with your phone number.

#### Change Your Address
Find this line:
```
address: "210 Oakridge Drive, Fuquay-Varina, NC 27526",
```
Replace with your address.

### Step 4: Save the File

Press `Cmd + S` (Mac) or `Ctrl + S` (Windows)

### Step 5: Check Your Changes

If your website is running, it will automatically update! Refresh your browser to see the changes.

---

## How to See Your Website

### Starting Your Website (Development Mode)

1. Open Terminal
2. Go to your project folder (drag it from Finder into Terminal):
   ```
   cd ~/path/to/your-project-folder
   ```
3. Start the server:
   ```
   npm run dev
   ```
4. Open your web browser
5. Go to: `http://localhost:4321`

You should see your website!

### Stopping Your Website

In Terminal, press `Ctrl + C`

---

## Common Problems & Fixes

### Problem: "command not found: npm"

**What it means:** Your computer doesn't have Node.js installed.

**How to fix:**
1. Go to https://nodejs.org
2. Download the "LTS" version (the one that says "Recommended")
3. Install it like any other program
4. Close Terminal and open it again
5. Try your command again

---

### Problem: "Port 4321 is in use"

**What it means:** Something else is already using that spot on your computer.

**How to fix:** The website will automatically try another port. Look for a message like:
```
Local    http://localhost:4322/
```
Use that address instead!

---

### Problem: The website looks broken or weird

**How to fix:**
1. Stop the server (`Ctrl + C`)
2. Run the update script:
   ```
   ./scripts/update.sh
   ```
3. Start again:
   ```
   npm run dev
   ```

---

### Problem: "Permission denied" when running a script

**How to fix:** Make the script runnable:
```
chmod +x scripts/update.sh
```
Then try again.

---

### Problem: Changes I made aren't showing up

**How to fix:**
1. Make sure you saved the file (`Cmd + S`)
2. Hard refresh your browser (`Cmd + Shift + R` on Mac)
3. If still not working, stop and restart the server

---

## 🤔 Still Stuck?

Don't worry! Here are some options:

1. **Google the error message** - Copy the error and search for it
2. **Ask for help** - Contact your web administrator
3. **Start fresh** - If all else fails, you can re-download the template

---

## 📝 Glossary (Word Definitions)

| Word | What It Means |
|------|---------------|
| **Terminal** | A program where you type commands to control your computer |
| **npm** | A tool that downloads and manages website code packages |
| **Server** | A program that runs your website so browsers can see it |
| **localhost** | Your own computer, acting as a mini server |
| **Port** | Like a door number - different programs use different ports |
| **Repository** | A folder that tracks all changes to your project |

