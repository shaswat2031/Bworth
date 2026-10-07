const fs = require('fs');

const svg = fs.readFileSync('./public/bworth logo.svg', 'utf8');

// Copy bworth logo.svg to public/bworth-logo.svg and public/logo.svg for clean URLs
fs.writeFileSync('./public/bworth-logo.svg', svg);
fs.writeFileSync('./public/logo.svg', svg);

// Extract only the colored paths (the infinity symbol in the center)
const lines = svg.split('\n');
const markLines = lines.filter(line => {
  if (!line.includes('<path')) return false;
  // Black paths are the letters 'B', 'W', 'O', 'R', 'T', 'H' and subtext
  const isBlack = line.includes('fill="#010101"') || 
                  line.includes('fill="#020202"') || 
                  line.includes('fill="#030303"') || 
                  line.includes('fill="#040404"') || 
                  line.includes('fill="#050505"') || 
                  line.includes('fill="#000000"');
  return !isBlack;
});

console.log('Found colored mark paths count:', markLines.length);

// Infinity mark bounding box: x is ~355 to 520 (width 165), y is ~40 to 180 (height 140)
// To center it nicely in a square: minX = 350, minY = 35, width = 175, height = 175
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="350 35 175 175" width="175" height="175">
${markLines.join('\n')}
</svg>`;

fs.writeFileSync('./public/icon.svg', iconSvg);
fs.writeFileSync('./app/icon.svg', iconSvg);
console.log('Saved public/icon.svg and app/icon.svg');
