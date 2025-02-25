/**
 * first we go to monog db 
 * install mongo db compass 
 * now we need connection of mongo db
 */
const { MongoClient } = require('mongodb');
const passward  = "ukjJEVg58zUN3roM"
const URL = "mongodb+srv://muhammadatifkhan:ukjJEVg58zUN3roM@atifnodejs.zjo3x.mongodb.net/"

  // now we are creating an object 
  // maing connections 
// connection varaible give to him to conect with db
  const connection  = new MongoClient(URL) 

  const database = "Testing"

  const main = async ()=>{

       await connection.connect()
       console.log("Database is connected succesfully");

       const db = connection.db(database)
       const coll = db.collection('Userinfo')

       const data = {
        "name":"Ali khan" ,
        "age":"20"
       }

       // inserting the data 

       const insert = await coll.insertOne(data)
       console.log(insert);

       // fetching the data from database

       const findResult = await coll.find({}).toArray();
       console.log('Found documents =>', findResult);

       // filter the data 

       const filteredDocs = await coll.find({ name:"Muhammad Atif khan" }).toArray();
console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

// deleting the data 

 const deleted = await coll.deleteOne({name:"Atif"})

 // updating the data 

 const updateResult = await coll.updateOne({ name:"Ali" }, { $set: { age: 10 } });


       return "Connection is eastablished"

  }
  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => connection.close());