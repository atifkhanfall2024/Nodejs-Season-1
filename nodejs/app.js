// we are taking about global object in js

// in V8 engine we use global object by using window  , this  , self  but here in node js we cannot use that keyowrds for object so in node js we use golbal here


 // console.log(global);

// so by running this global this will give to us many things in console like timeout , settimout , settimeinterval etc 

 // console.log(window);

 // so by running window in nodejs is not working bcz this work only in v8 


 // lather on open js foundation using an object with name globalThis this will work in v8 as well as node js 

  // console.log(globalThis);

  // think about that if i have multiple files then exporting and require every one make the code complicated mean not clean our code to make the clean code lets check 
//  const sums =  require("./Arthematic/sum")
// const {subtract} = require("./Arthematic/sub") 
 // const {x , calcusum} = sums
  // console.log(x);

  // to require json data

  const data = require("./data.json")
  console.log(data);

  // now our code look so clean 

  const {calcusum , subtract} = require("./Arthematic/index")

   const a = 12 ;
   const b = 20 ;
  
      calcusum(a,b)
      subtract(a,b)
      // this will give an empty object
      console.log(module.exports);
  console.log(globalThis === global); // true