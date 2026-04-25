const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');

// 1. HERO SECTION (line 56)
// Make Hero red:
content = content.replace(/<section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-20 font-sans">/g, '<section className="relative min-h-screen bg-[#DC2626] overflow-hidden flex items-center pt-20 font-sans">');

// We need to carefully replace text colors ONLY inside the hero section, OR globally if it's safe.
// Actually, it's safer to use a regex that matches the hero section.
// Or just replace the exact known strings from Hero.
content = content.replace(/<h1 className="text-5xl md:text-6xl lg:text-\[4\.5rem\] lg:text-\[5\.5rem\] leading-\[1\.05\] text-black tracking-tight">/g, '<h1 className="text-5xl md:text-6xl lg:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] text-white tracking-tight">');
content = content.replace(/<span className="font-light text-gray-600">a Better<\/span>/g, '<span className="font-light text-red-200">a Better</span>');
content = content.replace(/<span className="font-light text-gray-600">Today<\/span>/g, '<span className="font-light text-red-200">Today</span>');
content = content.replace(/<p className="mt-10 text-gray-500 text-sm md:text-base max-w-lg leading-relaxed font-medium">/g, '<p className="mt-10 text-red-100 text-sm md:text-base max-w-lg leading-relaxed font-medium">');

// Hero buttons
content = content.replace(/className="bg-red-600 hover:bg-red-700 text-white rounded-full py-3\.5 pl-8 pr-3\.5 flex items-center gap-6 transition-transform hover:scale-105"/g, 'className="bg-white hover:bg-gray-100 text-red-600 rounded-full py-3.5 pl-8 pr-3.5 flex items-center gap-6 transition-transform hover:scale-105"');
// The inner button icon bg
content = content.replace(/<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">\s*<svg className="w-3\.5 h-3\.5 text-red-600"/g, '<div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">\n                <svg className="w-3.5 h-3.5 text-white"');

// Hero View Works
content = content.replace(/className="text-black hover:text-gray-600 text-\[11px\] font-medium tracking-\[0\.15em\] uppercase flex items-center gap-4 transition-colors"/g, 'className="text-white hover:text-red-200 text-[11px] font-medium tracking-[0.15em] uppercase flex items-center gap-4 transition-colors"');

// 2. GRID SECTION (Line 219)
content = content.replace(/<section className="relative bg-white py-24 lg:py-32 overflow-hidden border-t border-gray-900">/g, '<section className="relative bg-red-700 py-24 lg:py-32 overflow-hidden border-t border-red-800">');
content = content.replace(/<span className="text-gray-500 text-\[10px\] tracking-\[0\.4em\] font-medium uppercase" style=\{\{ writingMode: 'vertical-rl', transform: 'rotate\(180deg\)' \}\}>HOMEPAGE<\/span>/g, '<span className="text-red-200 text-[10px] tracking-[0.4em] font-medium uppercase" style={{ writingMode: \'vertical-rl\', transform: \'rotate(180deg)\' }}>HOMEPAGE</span>');

// Grid texts
content = content.replace(/<p className="text-gray-500 text-\[10px\] md:text-xs text-right leading-relaxed flex-1">/g, '<p className="text-red-200 text-[10px] md:text-xs text-right leading-relaxed flex-1">');
content = content.replace(/<div className="h-\[1px\] bg-gray-800 flex-1"><\/div>/g, '<div className="h-[1px] bg-red-600 flex-1"></div>');
content = content.replace(/leading-\[1\.1\] tracking-tight text-black mb-2 md:mb-4">/g, 'leading-[1.1] tracking-tight text-white mb-2 md:mb-4">');
content = content.replace(/<span className="font-light text-gray-600">For/g, '<span className="font-light text-red-200">For');
content = content.replace(/<span className="font-light text-gray-600">Ideas For/g, '<span className="font-light text-red-200">Ideas For');
content = content.replace(/<span className="font-light text-gray-600">Campaign\./g, '<span className="font-light text-red-200">Campaign.');
content = content.replace(/leading-\[1\.1\] tracking-tight text-black">/g, 'leading-[1.1] tracking-tight text-white">');

// Grid section button
content = content.replace(/className="bg-red-600 hover:bg-red-700 text-white rounded-full py-3 pl-8 pr-3 flex items-center gap-5 transition-transform hover:scale-105 ml-2 mt-4 lg:mt-0"/g, 'className="bg-white hover:bg-gray-100 text-red-600 rounded-full py-3 pl-8 pr-3 flex items-center gap-5 transition-transform hover:scale-105 ml-2 mt-4 lg:mt-0"');

// Grid items container
content = content.replace(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-\[1px\] bg-gray-800\/60 border border-gray-800\/60">/g, '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-red-800 border border-red-800">');

// Grid item cards
// Replace `<div key={i} className="relative bg-white ... hover:bg-gray-50 border border-gray-100">`
content = content.replace(/<div key=\{i\} className="relative bg-white p-8 lg:p-10 min-h-\[280px\] lg:min-h-\[340px\] flex flex-col group transition-colors hover:bg-gray-50 border border-gray-100">/g, '<div key={i} className="relative bg-red-700 p-8 lg:p-10 min-h-[280px] lg:min-h-[340px] flex flex-col group transition-colors hover:bg-red-600 border-none">');

// Grid card title & text
content = content.replace(/<h4 className="text-black font-medium text-lg lg:text-xl leading-snug whitespace-pre-line mb-6 z-10">/g, '<h4 className="text-white font-medium text-lg lg:text-xl leading-snug whitespace-pre-line mb-6 z-10">');
content = content.replace(/<p className=\{`text-gray-500 text-xs/g, '<p className={`text-red-100 text-xs');
content = content.replace(/<span className="text-\[10px\] font-medium uppercase tracking-\[0\.15em\] text-black">/g, '<span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white">');
content = content.replace(/<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-all group-hover:bg-\[#222\] group-hover:translate-x-1">/g, '<div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center transition-all group-hover:bg-white group-hover:translate-x-1 group-hover:text-red-600">');

fs.writeFileSync('src/pages/Home.jsx', content);
console.log("Home fixed");
