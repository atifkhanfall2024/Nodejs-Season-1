// IIFE is immedately invoked function expression which work to protected and keep our code to be private 


// IIFE function have by default passing parms one is module , require and some other parms 

// when we write code in module then this code is wrraped into IIFE and after IIFE pass to v8 engine

(function (module   ,  require){

 //   require("./path")

    const val = "Hello"
    console.log(val);

})(module.export = {}) // this is immedaitely invoked function expression


// after this code then the code passing to V8 engine to run js code

console.log(__dirname);
console.log(__filename);