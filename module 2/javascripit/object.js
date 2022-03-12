//empty object
 //let obj ={}
   // console.log(obj);
     
//let objsahil ={
  //  name: "SAHIL",
    //Age: 22,
    //Phnumber: 9882567121,
    //Lastname: 'chaudhary'
//};    
//console.log(objsahil);

let capamrica ={
    Name: 'steve',
    Age: 9999,
    friend: ['natsha','bucky','bucky','thor'],
    adress:{
        state:'himachal',
        city:'kangra'
    },
    isavenger:false, 
    sayhi:function(){
        console.log("say hii heloo anshu");
    }

}

//
///
//whole object
console.log(capamrica.adress.city);
console.log(capamrica.Name);
console.log(capamrica.Age);
console.log(capamrica.friend);
console.log(capamrica.friend[0]);
//
//
//call function
capamrica.sayhi();
//
//
console.log("before updare",capamrica);
// add new key 
capamrica.movie =['endgame','civil war','avaneger'];
console.log("after updare",capamrica);

//delete key
delete capamrica.movie;
capamrica.isavenger = true;
console.log(capamrica);
// 
//
//second method
console.log(capamrica.Name);
console.log(capamrica['Name']);