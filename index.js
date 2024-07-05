const express = require("express");
const app= express();
app.set("view engine" ,"ejs");
    const mongoose=require("mongoose");
    mongoose.connect("mongodb://127.0.0.1:27017/vashaapp").then(()=>{
        console.log("data base")
    }).catch((err)=>{
        console.log("error")
    })
    const stuRoute=require("./routes/studentroute");
    app.use(stuRoute);
    const PORT=8000;
    app.listen(PORT, ()=>{
        console.log(`port run on ${PORT}`)
    })
