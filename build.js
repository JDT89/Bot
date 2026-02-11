#!/usr/bin/env node
/**
 * EconomyBot Website — Build Script
 * Copies all source files to /dist for Render Static Site deployment
 */

const fs = require('fs');
const path = require('path');

const SRC = __dirname;
const DIST = path.join(__dirname, 'dist');

// Files and directories to copy
const INCLUDE = [
  'index.html',
  'commands.html',
  'guide.html',
  'premium.html',
  'status.html',
  'src',
];

// Clean dist
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

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.lstatSync(srcPath).isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  });
}

// Build
console.log('🏗️  Building EconomyBot website...\n');

rmDir(DIST);
fs.mkdirSync(DIST, { recursive: true });

INCLUDE.forEach(item => {
  const src = path.join(SRC, item);
  const dest = path.join(DIST, item);
  if (!fs.existsSync(src)) { console.log(`  ⚠  Skipping missing: ${item}`); return; }
  const stat = fs.lstatSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
    console.log(`  📁 Copied dir  → dist/${item}`);
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`  📄 Copied file → dist/${item}`);
  }
});

// Write _redirects for SPA-like behavior
const redirects = `# Render redirects
/home   /index.html   200
/*      /index.html   404
`;
fs.writeFileSync(path.join(DIST, '_redirects'), redirects);
console.log('  📝 Written     → dist/_redirects');

// Write sitemap.xml
const baseUrl = 'https://economybot.gg';
const pages = ['', 'commands', 'guide', 'premium', 'status'];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${baseUrl}/${p ? p + '.html' : ''}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p ? '0.8' : '1.0'}</priority>
  </url>`).join('\n')}
</urlset>`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
console.log('  🗺️  Written     → dist/sitemap.xml');

// Write robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(DIST, 'robots.txt'), robots);
console.log('  🤖 Written     → dist/robots.txt');

console.log('\n✅ Build complete! Output: ./dist/');
console.log('\nRender deployment config:');
console.log('  Build Command:     npm run build');
console.log('  Publish Directory: dist');
console.log('  Environment:       Static Site\n');
