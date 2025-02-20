// now we are working here on sync as well as async code 

 const Crypto = require("crypto")

// this is sync code and this will block the flow of code 
// now when we increase the value ever then this make the more time and block the js engine 
// so never ever used sync fuuntion bcz it block the code kexecution
 Crypto.pbkdf2Sync("muhammadatifkhan" , "salt" , 50000 , 50 , "sha512")
 console.log("first key is generated");



 // this is an async way 
 Crypto.pbkdf2("muhammadatifkhan" , "salt" , 5000 , 10 , "sha512" , (err, key)=>{
    console.log("second key is generated");
    console.log(key);
 }) 