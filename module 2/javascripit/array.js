//empty array 
let arr = [];
console.log(arr);
 
//array with element-->
let eleary = [1,2, 3, 4 ,"hellow array",true,4.5];
console.log(eleary);

console.log("element of 4th index: "+ eleary[4]);
console.log("element of 0th index: "+ eleary[0]);
eleary[3]= "notning";
console.log(eleary);
console.log("###################################");

//array method
//1 push
console.log("array after push: ",eleary);
eleary.push("new item:-)");
console.log("array before push: ",eleary);

// 2 pop
console.log("array after pop: ",eleary);
eleary.pop();
console.log("array before pop: " ,eleary);

//3 shift
console.log("array after shift: ",eleary);
eleary.shift();
console.log("array before shift: ",eleary);

//4 unshift
console.log("array after unshift: ",eleary);
eleary.unshift("new item enter")
console.log("array before unshift: ",eleary);

//5 length 
let len = eleary.length;
console.log(len);