/**
 * Libuv has a thread pool when ever an async code is executed then js main engine give that code into libuv in libuv this is assign to thread pool and thread pool make the request to complete that code
 * 
 * Thread pool size is 4 by default 
 * 
 * 
 *  when to use thread pool ?
 * 
 *   specifically in fs ,DNS nslookup  , crypto  , user specific input etc
 * 
 * 
 *  Is nodejs is single or multithread ?
 * 
 *  basically its depend when we executing a sync code then its a single thread when we needed libuv we use multithread(4 thread by default ) if require .
 * 
 *  so simply we cannot say that node js is multithread or single thread it depends 
 * 
 *  .............. Practicle checking ....................
 */


const Crypto = require("crypto")

// i make four call of crypto bcz by default thread pool size is 4  but when i make 5 call its waiting for execution bcz we have total 4 size thats why it wait until one thread is empty

/*
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
*/

// but if i have a lot of thread request from libuv then how to handle ?

// we can increase the size of thread pool also using

process.env.UV_THREADPOOL_SIZE = 10

Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})
Crypto.pbkdf2("passward" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("your passward is encrypted");
})