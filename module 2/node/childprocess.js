let cp = require('child_process');
//console.log(cp);
//
//
//open  calculator with the help of file
//
    //cp.execFileSync("calc")
    let content = cp.execSync("node text.js");
    console.log(""+content);