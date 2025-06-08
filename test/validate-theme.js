const fs = require('fs');
const path = require('path');

const themePath = path.join(__dirname, '..', 'themes', 'Revellion Theme-color-theme.json');

try {
  const content = fs.readFileSync(themePath, 'utf8');
  const json = JSON.parse(content);
  if (json.name !== 'Revellion') {
    console.error(`Expected name to be "Revellion" but got "${json.name}"`);
    process.exitCode = 1;
  } else {
    console.log('Theme JSON is valid and contains expected name.');
  }
} catch (err) {
  console.error('Failed to read or parse theme JSON:', err);
  process.exitCode = 1;
}
