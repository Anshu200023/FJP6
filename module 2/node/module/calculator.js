const { futimes } = require("fs");

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

module.exports = {
    addtion: add,
    multiply: mul,
    subtract: sub,
    division: div,
}