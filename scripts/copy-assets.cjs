const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'assets');
const dest = path.join(__dirname, '..', 'public', 'assets');

if (!fs.existsSync(src)) {
  console.warn('assets folder not found, skipping copy');
  process.exit(0);
}

fs.mkdirSync(dest, { recursive: true });
fs.cpSync(src, dest, { recursive: true });
console.log('Copied assets to public/assets');
