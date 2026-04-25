const fs = require('fs');
const path = require('path');

const portfolioPath = path.join(__dirname, 'src', 'pages', 'Portfolio.jsx');
let code = fs.readFileSync(portfolioPath, 'utf8');

// 1. Reduce text sizes in the large headers
code = code.replace(/text-3xl md:text-5xl font-extrabold/g, 'text-2xl md:text-4xl font-bold');
code = code.replace(/text-3xl md:text-4xl lg:text-5xl font-extrabold/g, 'text-2xl md:text-4xl font-bold');
code = code.replace(/text-3xl md:text-4xl font-bold/g, 'text-2xl md:text-3xl font-bold');
code = code.replace(/text-2xl md:text-\[28px\] font-extrabold/g, 'text-xl md:text-2xl font-bold');

// 2. Reduce paragraph text size
code = code.replace(/text-\[17px\]/g, 'text-base');
code = code.replace(/text-\[15px\] md:text-\[16px\]/g, 'text-sm md:text-[15px]');

// 3. Reduce padding and gaps
code = code.replace(/gap-16/g, 'gap-10');
code = code.replace(/py-20/g, 'py-16');
code = code.replace(/py-24/g, 'py-16 md:py-20');

// 4. Shrink large UI elements like circular model and big icons
// In 360 Ecosystem, it's 16 h-16. That's fine.
// In Digital Ad section, card paddings
code = code.replace(/p-8 shadow-sm/g, 'p-6 shadow-sm');
code = code.replace(/p-10 flex flex-col items-center/g, 'p-8 flex flex-col items-center');

// Update image heights if any in Portfolio (e.g. the 7 blocks)
code = code.replace(/h-\[220px\] md:h-\[280px\]/g, 'h-[200px] md:h-[240px]');
code = code.replace(/h-\[300px\] md:h-\[400px\]/g, 'h-[250px] md:h-[350px]');

fs.writeFileSync(portfolioPath, code);
console.log('Portfolio size reduced!');
