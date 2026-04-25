const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'src', 'pages', 'Services.jsx');
let code = fs.readFileSync(servicesPath, 'utf8');

// 1. Reduce icon box sizes
code = code.replace(/w-32 h-32/g, 'w-24 h-24');
code = code.replace(/w-16 h-16/g, 'w-10 h-10');

// 2. Reduce headings
code = code.replace(/text-2xl md:text-\[28px\] font-extrabold/g, 'text-xl md:text-2xl font-bold');

// 3. Reduce paragraph text size
code = code.replace(/text-\[15px\] md:text-\[16px\]/g, 'text-sm md:text-[15px]');

// 4. Reduce checkmark list items text size
code = code.replace(/text-\[14px\]/g, 'text-[13.5px]');

// 5. Reduce gaps and padding between rows
code = code.replace(/gap-12 lg:gap-16/g, 'gap-8 lg:gap-10');
code = code.replace(/pb-12 border-b/g, 'pb-10 border-b');

// 6. Reduce image heights
code = code.replace(/h-\[220px\] md:h-\[280px\]/g, 'h-[200px] md:h-[240px]');

// 7. Adjust container padding
code = code.replace(/py-20 px-6 lg:px-20/g, 'py-16 px-6 lg:px-12');

fs.writeFileSync(servicesPath, code);
console.log('Services size reduced!');
