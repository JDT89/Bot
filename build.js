#!/usr/bin/env node
/**
 * EconomyBot Website — Build Script
 * Copies all source files to /dist for Render Static Site deployment
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

// Files and directories to copy
const INCLUDE = [
  'changelog.html',
  'commands.html',
  'guide.html',
  'index.html',
  'main.js',
  'premium.html',
  'roadmap.html',
  'status.html',
  'support.html',
  'src',
];

// Clean dist directory
function rmDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(file => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) rmDir(curPath);
      else fs.unlinkSync(curPath);
    });
    fs.rmdirSync(dirPath);
  }
}

// Recursively copy directory
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Build
console.log('🏗️  Building EconomyBot website...\n');

// Clean and create dist directory
rmDir(DIST);
fs.mkdirSync(DIST, { recursive: true });

// Copy files and directories
INCLUDE.forEach(item => {
  const src = path.join(ROOT, item);
  const dest = path.join(DIST, item);
  
  if (!fs.existsSync(src)) {
    console.log(`  ⚠️  Skipping missing: ${item}`);
    return;
  }
  
  const stat = fs.lstatSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
    console.log(`  📁 Copied directory → dist/${item}/`);
  } else {
    fs.copyFileSync(src, dest);
    console.log(`  📄 Copied file      → dist/${item}`);
  }
});

console.log('\n✅ Build complete! Output: ./dist/');
console.log('\nStatic files ready for deployment:');
console.log(`  Total files copied: ${INCLUDE.length}`);
console.log('  Publish Directory:  dist/\n');
