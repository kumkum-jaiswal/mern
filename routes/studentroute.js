const express=require("express");
const route = express.Router();

const stucontroller= require("../controller/Studentcontroller");

route.get("/" ,stucontroller.homepage);
route.get("/About" ,stucontroller.aboutpage);
route.get("/Service" ,stucontroller.servicepage);   //method--pathname--controllername--fun-name
route.get("/Contact" ,stucontroller.contactpage);

route.post("/studentsave",stucontroller.studentsave)

route.get("/update",stucontroller.updatedata);


route.get("/recdelete",stucontroller.recDelete);

route.get("/recedit" , stucontroller.recordEdit);
route.post("/updatesave", stucontroller.recEditSave);

route.get("/search", stucontroller.recSearch);

 route.post("/search", stucontroller.searchRecord);

module.exports = route;