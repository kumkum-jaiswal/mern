const express = require("express");
const app= express();
require('dotenv').config()
//  PORT=8000;
const PORT=process.env.PORT
const Mongo=process.env.MONGOURL

app.set("view engine" ,"ejs");
   
app.use(express.urlencoded({ extended: false}));

    const mongoose=require("mongoose");

    mongoose.connect(Mongo).then(()=>{
        console.log("data base")
    }).catch((err)=>{
        console.log("error" +err)
    })
    const stuRoute=require("./routes/studentroute");
    app.use(stuRoute);
    
    app.listen(PORT, ()=>{
        console.log(`port run on ${PORT}`)
    })
