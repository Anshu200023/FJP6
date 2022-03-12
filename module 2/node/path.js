//"C:\Users\Dell\Desktop\FJP6\module 2\node\path.js"
const { dirname } = require("path");
let path = require("path" );
//console.log(path);
let extensionname = path.extname("C:\Users\Dell\Desktop\FJP6\module 2\node\path.js");
console.log(extensionname);
//let basename = path.basename("C:\Users\Dell\Desktop\FJP6\module 2\node\childprocess.js");
//
//console.log(basename);
//console.log(__dirname);
console.log(__filename);
let dirPath = __dirname;
console.log(dirPath);

let newfilepath = path.join(dirPath,"text.js");
console.log(newfilepath);