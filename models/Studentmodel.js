

const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({  //new dynamic memory allocation
    rollno:Number,
    name:String,
    city:String,
    fees:Number
})
module.exports= mongoose.model("cybromstudent",studentSchema);