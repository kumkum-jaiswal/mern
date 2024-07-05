const stuModel= require("../models/Studentmodel");
const homepage=async(req,res)=>{
    res.render("Home")
}
const servicepage=async(req,res)=>{
    res.render("Service")
}
const aboutpage=async(req,res)=>{
    res.render("About")
}
const contactpage=async(req,res)=>{
    res.render("Contact")
}
module.exports={
    homepage,
    contactpage,
    aboutpage,
    servicepage
}