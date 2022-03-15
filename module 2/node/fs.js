let fs = require("fs");
//console.log(fs);
let path = require("path");
//let filepath = path.join(__dirname,"file.txt");
//console.log(filepath);
// c-create
//fs.writeFileSync(filepath,"anshu");

//r- read
//console.log('before update:->');

//let content = fs.readFileSync(filepath,'utf-8');

//console.log(content);

//u-update 
//fs.appendFileSync(filepath,'\nNew added content');
//console.log('after update:->');
//console.log(fs.readFileSync(filepath,'utf-8'));

//D - delete
 fs.unlinkSync(filepath);
 //create directory
 //if(!fs.existsSync("hamrri directory"))
 //fs.mkdirSync("hamrri directory");

 //read directory
 //let folderpath = "C:\\Users\\Dell\\Desktop\\FJP6\\module 1";

 //let contentofFolder = fs.readdirSync(folderpath);
 //console.log(contentofFolder);

 //delete a directory
 //fs.rmdirSync("hamrri directory");
 //
 // copy  a file
 let sourcepath = path.join(__dirname,"index.html");
 let destination = path.join(__dirname,"module2","index.html");
 console.log(sourcepath);
 console.log(destination);
 fs.copyFileSync(sourcepath,destination);;
