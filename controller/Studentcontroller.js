const stuModel= require("../models/Studentmodel");
const homepage=async(req,res)=>{
    res.render("Home")
}
const servicepage=async(req,res)=>{
    res.render("Service")
}
const aboutpage=async(req,res)=>{

    //  stuModel.find({}).then((res)=>{
    //     console.log(res)
    //  }) 
    // res.render("About");
    const myData =await stuModel.find();
    res.render("about",{Data:myData});   
   
}
const contactpage=async(req,res)=>{
    res.render("Contact")
}

const studentsave=async(req,res)=>{
    // console.log(req.body.rollno);
    
    let rno=req.body.rollno;
    let nm=req.body.name;       // const{rno,nm,ct,fs}=req.body
    let ct=req.body.city;
    let fs=req.body.fees;

    const student = new stuModel({
        rollno:rno,
        name:nm,
        city:ct,
        fees:fs
    })
    student.save();

    res.render("Home"); //koi se page bhi likh skte h

}

const updatedata=async(req,res)=>{
  const myData= await stuModel.find();
  res.render("update",{Data:myData})
}

const recDelete=async(req,res)=>{
    const myid=req.query.id
//    console.log(myid)
   const ans=await stuModel.findByIdAndDelete(myid);
   if(ans)
    {
    const myData= await stuModel.find();
    res.render("update", {Data:myData});
   }
}
const recordEdit=async(req, res)=>{
    const myid=req.query.id;
    const MyRecord= await stuModel.findById(myid);
    res.render("edit", {myRec:MyRecord})
}
const recEditSave=async(req, res)=>{
    const {recid, rollno, name, city, fees}=req.body;
    const result= await stuModel.findByIdAndUpdate({_id:recid}, {
        rollno:rollno,
        name:name,
        city:city,
        fees:fees

    });
    const myans=await stuModel.find();
    res.render("display",{Data:myans})
}
const recSearch=async(req, res)=>{
    res.render("search",{myData:[]})
}
const searchRecord=async(req,res)=>{
    let rno=req.body.rollno;
    const myans=await stuModel.find({rollno:rno});
    res.render("search",{myData:myans});
}
module.exports={
    homepage,
    contactpage,
    aboutpage,
    servicepage,
    studentsave,
    updatedata,
    recDelete,
    recordEdit,
    recEditSave,
    recSearch,
    searchRecord
   
}