const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');

if (!fs.existsSync(indexPath)) {
  console.error('Missing dist/index.html. Run npm run build first.');
  process.exit(1);
}

fs.copyFileSync(indexPath, fallbackPath);
console.log('Created dist/404.html for GitHub Pages routing.');
