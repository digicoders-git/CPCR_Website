const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'src', 'pages', 'Services.jsx');
const portfolioPath = path.join(__dirname, 'src', 'pages', 'Portfolio.jsx');

let servicesCode = fs.readFileSync(servicesPath, 'utf8');
let portfolioCode = fs.readFileSync(portfolioPath, 'utf8');

// Start marker in Services.jsx
const startMarker = '{/* 360 Ecosystem Section */}';
// End marker in Services.jsx
const endMarker = '{/* Services List Section */}';

const startIndex = servicesCode.indexOf(startMarker);
const endIndex = servicesCode.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error("Markers not found in Services.jsx");
    process.exit(1);
}

const extractedBlock = servicesCode.substring(startIndex, endIndex);

// Remove extractedBlock from Services.jsx
servicesCode = servicesCode.substring(0, startIndex) + servicesCode.substring(endIndex);

// Prepend extractedBlock to the 7 sections in Portfolio.jsx
const portStartMarker = '{/* Qualitative Research Section */}';
const portStartIndex = portfolioCode.indexOf(portStartMarker);

if (portStartIndex === -1) {
    console.error("Marker not found in Portfolio.jsx");
    process.exit(1);
}

portfolioCode = portfolioCode.substring(0, portStartIndex) + extractedBlock + portfolioCode.substring(portStartIndex);

fs.writeFileSync(servicesPath, servicesCode);
fs.writeFileSync(portfolioPath, portfolioCode);

console.log("Migration 2 complete!");
