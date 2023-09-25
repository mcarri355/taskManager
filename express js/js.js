const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../../../../../../Public/Desktop');
console.log(fs.readdirSync(filePath));
