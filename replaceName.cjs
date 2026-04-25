const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replace exact occurrences
  content = content.replace(/AI Politics Pvt\. Ltd\./g, 'Centre for Political and Civic Research');
  content = content.replace(/AI Politics'/g, "CPCR's");
  content = content.replace(/AI Politics/g, 'CPCR');
  content = content.replace(/AI POLITICS/g, 'CPCR');
  content = content.replace(/aipolitics\.in/g, 'cpcr.in');

  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (let file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      replaceInFile(fullPath);
    }
  }
}

processDir('src');
