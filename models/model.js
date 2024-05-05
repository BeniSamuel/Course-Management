const mongoose= require("mongoose");

//creating the schema for the our collection
const courseSchema= new mongoose.Schema({
    name:{
        type:String,
        minlength:4,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

//creating the model
const Course=mongoose.model("Course",courseSchema)

module.exports = Course;