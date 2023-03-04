// Importing
const mongoose = require("mongoose");

// Connect Database
mongoose.connect("mongodb+srv://user:user@cluster0.stvhrzo.mongodb.net/?retryWrites=true&w=majority")

// Schema
const Schema = mongoose.Schema;

var courseSchema = new Schema(
    {
       cName : String,
       cDesc : String,
       cDuration : Number,
       cStartDate : Date 
    }
)

var CourseInfo = mongoose.model("courses",courseSchema);
module.exports = CourseInfo;