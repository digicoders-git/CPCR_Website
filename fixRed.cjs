const fs = require('fs');

let content = fs.readFileSync('src/components/Footer.jsx', 'utf-8');
content = content.replace(/bg-white text-black/g, 'bg-red-600 text-white');
content = content.replace(/text-black/g, 'text-white');
content = content.replace(/border-gray-900/g, 'border-none');
content = content.replace(/text-gray-500/g, 'text-red-200');
content = content.replace(/text-gray-600/g, 'text-red-300');
content = content.replace(/bg-gray-50/g, 'bg-red-700');
content = content.replace(/hover:bg-gray-800/g, 'hover:bg-red-800');
content = content.replace(/border-gray-800/g, 'border-red-800');
content = content.replace(/border-\[#222\]/g, 'border-red-500');
content = content.replace(/bg-red-600 flex items-center justify-center hover:bg-red-700/g, 'bg-white flex items-center justify-center hover:bg-gray-100');
content = content.replace(/text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth=\{3\}/g, 'text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}');
content = content.replace(/hover:text-red-600/g, 'hover:text-white');
content = content.replace(/text-white hover:text-red-300/g, 'text-red-200 hover:text-white');
content = content.replace(/text-white font-medium hover:text-red-200/g, 'text-red-200 hover:text-white');
content = content.replace(/text-red-600/g, 'text-white font-bold'); // For the Home link
fs.writeFileSync('src/components/Footer.jsx', content);

console.log("Footer fixed");
