// here we can make the mixtrue of sync and async code 


// actually we write this require function and we already know about that this method is cjf and it work on sync way so we require fs and https

const fs  = require("fs")
const https = require("https")

console.log("Hello your execution of programme is start");

 const a = 50
 const b = 30  

   // by using this is block code and this will block the main thread execution
   // but this is not recommended way as a developer its a blocking code  of fs.readfilesync
   // actually this file is too small but if this file  is too large then this will block the execution of js engine

   fs.readFileSync("./file.txt" , "utf-8")
   console.log("file is reading in sync fashion");


 // this is an async code first v8 engine request to libuv to handle the async code then after this fetching the data libuv send the call back function to the call stack of js engine 

 https.get("https://dummyjson.com/product" , (res)=>{
    console.log("Data successfully fetch");
 })

 setTimeout( ()=>{
    console.log("your time is finished ");
 },4000)

 fs.readFile("./file.txt" , "utf-8"  ,(err ,data)=>{
    console.log(data);
 })

 const n =  (y ,z)=>{

     const x = 0
     const result  = x*y*z
     return result
 }

const d =  n(a,b)
console.log(d);