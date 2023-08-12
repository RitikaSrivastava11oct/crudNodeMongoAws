const express = require('express');
const aboutRouter = require("./controllers/aboutRouter");
const bodyparser = require('body-parser')

const app = express();

// app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/about", aboutRouter);

app.listen(3000,'localhost',()=>
    console.log("server running on localhost:3000")
);


