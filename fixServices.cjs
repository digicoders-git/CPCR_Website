const fs = require('fs');

let content = fs.readFileSync('src/pages/Services.jsx', 'utf-8');

// Replace hero background
content = content.replace(/<section className="relative pt-32 md:pt-48 pb-24 bg-white overflow-hidden min-h-\[60vh\] flex items-center border-b border-gray-900">/g, '<section className="relative pt-32 md:pt-48 pb-24 bg-red-600 overflow-hidden min-h-[60vh] flex items-center border-b border-red-700">');

// Hero texts
content = content.replace(/<Link to="\/" className="text-black hover:text-gray-600 transition-colors">Home<\/Link>\s*<span className="text-gray-700">\/<\/span>\s*<span className="text-gray-500">Services<\/span>/g, '<Link to="/" className="text-white hover:text-red-200 transition-colors">Home</Link>\n                <span className="text-red-300">/</span>\n                <span className="text-red-200">Services</span>');

content = content.replace(/<h1 className="text-5xl md:text-6xl lg:text-\[5\.5rem\] leading-\[1\.1\] text-black tracking-tight mb-16">/g, '<h1 className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] text-white tracking-tight mb-16">');
content = content.replace(/<span className="font-light text-gray-500">what<\/span>/g, '<span className="font-light text-red-200">what</span>');
content = content.replace(/<span className="font-light text-gray-500">best<\/span>/g, '<span className="font-light text-red-200">best</span>');

// Services Hero button
content = content.replace(/<span className="text-\[10px\] font-medium tracking-\[0\.2em\] uppercase text-red-600">Our Services<\/span>\s*<button onClick=\{[^}]+\} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer border border-gray-800">\s*<svg className="w-3\.5 h-3\.5 text-red-600"/g, '<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white">Our Services</span>\n              <button onClick={() => window.scrollTo({ top: window.innerHeight * 0.6, behavior: \'smooth\' })} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer border-none">\n                <svg className="w-3.5 h-3.5 text-red-600"');

// Wireframe text-gray-100 to text-red-500 in Hero
content = content.replace(/className="absolute -right-32 md:-right-64 w-\[600px\] h-\[600px\] md:w-\[900px\] md:h-\[900px\] text-gray-100 opacity-80"/g, 'className="absolute -right-32 md:-right-64 w-[600px] h-[600px] md:w-[900px] md:h-[900px] text-white opacity-20"');

fs.writeFileSync('src/pages/Services.jsx', content);
console.log("Services fixed");
