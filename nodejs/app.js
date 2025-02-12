// we are taking about global object in js

// in V8 engine we use global object by using window  , this  , self  but here in node js we cannot use that keyowrds for object so in node js we use golbal here


 console.log(global);

// so by running this global this will give to us many things in console like timeout , settimout , settimeinterval etc 

  console.log(window);

 // so by running window in nodejs is not working bcz this work only in v8 


 // lather on open js foundation using an object with name globalThis this will work in v8 as well as node js 

   console.log(globalThis);


  console.log(globalThis === global); // true