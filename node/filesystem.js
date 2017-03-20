const fs = require('fs');

module.exports = () => {
  return fs.readFileSync('package.json');
};