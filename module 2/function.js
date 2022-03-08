function sayhello(){
    console.log("hello function");
}
sayhello();
function sum(num1,num2){
    let a = num1+num2 ;
    console.log("number of addtion: " + a);
}
sum(3,5);
function multiply(num1,num2){
    return num1*num2;
}
let ans =multiply(3,5)
console.log(ans);


//let a = function sub(num1,num2){
  //  return num1-num2;
//}
//console.log(a(10,5));



//let a = function(num1,num2){
  //  return num1%num2;
//}
//console.log(a(10,20));


(function(num1,num2){
    console.log(num1/num2) ;  
})(10,5);
