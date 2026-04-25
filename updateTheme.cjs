const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // 1. Text overrides: White to Black
  content = content.replace(/text-white/g, 'text-black');
  
  // 2. Background overrides: Dark to White
  content = content.replace(/bg-black/g, 'bg-white');
  content = content.replace(/bg-\[#0A0A0A\]/g, 'bg-gray-50');
  content = content.replace(/bg-\[#1a1a1a\]/g, 'bg-gray-50');
  content = content.replace(/bg-\[#111\]/g, 'bg-white');
  
  // 3. Accent Overrides: Yellow to Red
  content = content.replace(/bg-\[#FFB800\]/g, 'bg-red-600');
  content = content.replace(/text-\[#FFB800\]/g, 'text-red-600');
  content = content.replace(/border-\[#FFB800\]/g, 'border-red-600');
  content = content.replace(/hover:bg-yellow-400/g, 'hover:bg-red-700');
  content = content.replace(/hover:text-yellow-400/g, 'hover:text-red-700');
  content = content.replace(/fill-\[#FFB800\]/g, 'fill-red-600');
  
  // 4. Buttons fixing
  // Fix red buttons to have white text instead of black
  content = content.replace(/(bg-red-600[^>]*?)text-black/g, '$1text-white');
  
  // 5. Borders and utilities
  content = content.replace(/border-white\/10/g, 'border-gray-200');
  content = content.replace(/border-\[#1a1a1a\]/g, 'border-gray-200');
  content = content.replace(/border-\[#333\]/g, 'border-gray-300');
  content = content.replace(/text-\[#333\]/g, 'text-gray-200'); // Wireframes
  content = content.replace(/text-\[#222\]/g, 'text-gray-100'); // Wireframes
  
  // 6. Hover text and Grays
  content = content.replace(/hover:text-white/g, 'hover:text-red-600');
  content = content.replace(/text-gray-300/g, 'text-gray-600');
  content = content.replace(/text-gray-400/g, 'text-gray-500');

  // 7. Text strokes
  content = content.replace(/style=\{\{\s*WebkitTextStroke:\s*'1px #[0-9a-fA-F]+'\s*\}\}/g, 'style={{ WebkitTextStroke: "1px #e5e5e5" }}');

  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated:', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (let f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith('.jsx')) processFile(full);
  }
}

walk('src/pages');
walk('src/components');
