let fs = require("fs");
//console.log(fs);
let path = require("path");
let filepath = path.join(__dirname,"file.txt");
console.log(filepath);
fs.writeFileSync(filepath,"hello file path");