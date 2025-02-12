// now if i want to run this module in app.js file so simply i require it
console.log("Executing sum in processing...................");
 c = "Am working in Module Export and require"

// now here a twist is occur that we cannot export var and functions by using require in appjs bcz its not working directly 
 
  var x = 50 ;
  const calcusum = (a,b)=>{
    let sum = a+b 
    console.log(sum);
  } 

 // calcusum(10,20)

 // by using module.exports now we can call a function any where on other file

 module.exports = {x , calcusum}