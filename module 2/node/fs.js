let fs = require("fs");
//console.log(fs);
let path = require("path");
let filepath = path.join(__dirname,"file.txt");
//console.log(filepath);
// c-create
fs.writeFileSync(filepath,"hello file path");

//r- read
console.log('before update:->');

let content = fs.readFileSync(filepath,'utf-8');
console.log(content);

//u-update 
fs.appendFileSync(filepath,'\nNew added content');
console.log('after update:->');
console.log(fs.readFileSync(filepath,'utf-8'));

//D - delete
 //fs.unlinkSync(filepath);