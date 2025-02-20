// inside in libuv we have three major components inside in libuv (Event loop ,callback queue ,  thread pool)

// we an async code is going to be executing then the call back function of async function will place inside in call back queue

// event loop check the call stack in js engine if empty or not if empty then take an data from call back queue and push into in call stack based on priority 



// ..............................................//

// now we going to understand that how an event loop work ?

// Event loop have timer  , poll , check  , close cylce mean code will execute in this fashion inside it have other cycle process.nextTick() and promise call back this will check the call stack to be empty 

//........ Important ..................//

// Before every pahse (timer , poll, check , close ) first event loop will goes to process.nextTick() this will check that what code to be execute based on prority and promise callback will work after that this will goes to timer and execute settimeout  , setinterval etc then after this will come back to process.nextTick() and promise call back then go to next phase poll phase and exeute this ...........



// ...... Execution of Code .............//

const https = require("https")
const fs = require("fs")
a= 100 ;


setImmediate(()=>{console.log("Set immediate will execute ");})

https.get("https://dummyjson.com/product" ,  ()=>{
    console.log("Request Done");

})

fs.readFile("./file.txt" , "utf-8" , (data)=>{
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
// time expired
// immediate will done
// file read
// http
