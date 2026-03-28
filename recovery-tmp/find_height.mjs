import fs from 'fs';

const bundle = fs.readFileSync('vercel_bundle.js', 'utf8');

// Search for the physics section wrapper height
const heightMatches = bundle.match(/height['":\s]*['"]?\d{2,4}px/g);
console.log("Height values:", heightMatches);

// Search for physics-section or section-wrapper 
const sectionMatch = bundle.match(/physics.{0,30}section|section.{0,30}wrapper/gi);
console.log("\nSection references:", sectionMatch);

// Search for "300" near "height"
const h300 = bundle.match(/.{0,40}300.{0,40}/g);
if (h300) {
  const filtered = h300.filter(m => m.includes('height') || m.includes('px'));
  console.log("\n300px references:", filtered);
}
