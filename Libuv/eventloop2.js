// ...... Execution of Code .............//
// in this code cycle of enevt loop that how an event loop will work 

const https = require("https")
const fs = require("fs")
a= 100 ;


setImmediate(()=>{console.log("Set immediate will execute ");})

process.nextTick(()=>console.log("process.nexttick()"))


https.get("https://dummyjson.com/product" ,  ()=>{
    console.log("Request Done");

})

Promise.resolve("promise").then(console.log)

fs.readFile("./file.txt" , "utf-8" , (err,data)=>{
    console.log(data);
})

setTimeout(()=>{
    console.log("Expired your time");
} )
 

function test (){
   console.log(a);
}

test()
console.log("Last line of coding");



// 100
// Last line of code 
// process.nexttick()
// your promise is resolve
// time expired
// immediate will done
// file read
// http
