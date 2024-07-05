const express=require("express");
const route = express.Router();

const stucontroller= require("../controller/Studentcontroller");

route.get("/" ,stucontroller.homepage);
route.get("/Contact" ,stucontroller.contactpage);
route.get("/Service" ,stucontroller.servicepage);
route.get("/About" ,stucontroller.aboutpage);

module.exports = route;