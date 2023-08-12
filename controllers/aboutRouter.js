const router = require("express").Router();
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ritika:ritika11@cluster0.bvygk.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri);

router.get('/',async(req,res)=>{
    console.log("req ",req.body);
    const result = await client.db("db").collection("data").findOne({"name":req.body.name});
    console.log(` User ${result}`);
    res.end(`User found ${JSON.stringify(result)}`)
})

router.put('/',async(req,res)=>{
    console.log("req ",req.body);
    const name = req.body.name;
    const newData = req.body.newData;
    const result = await client.db("db").collection("data").updateOne({"name":name},{$set:newData});
    res.end(`User updated ${result.matchedCount}`);
})

router.post('/',async(req,res)=>{
    console.log("req ",req.body);
    const newRecord ={
        "name":req.body.name,
        "age":req.body.age
    }
        const result = await client.db("db").collection("data").insertOne(newRecord);
        res.end(`User added ${result.insertedId}`);
        
})

router.delete('/',async(req,res)=>{
    console.log("req ",req.body);
    const result = await client.db("db").collection("data").deleteOne({"name" : req.body.name});
    res.end(`User deleted ${result.deletedCount}`);
})


module.exports = router;

