const Course=require("../models/model");
const Joi=require("joi");


exports.creatingCourse = async(req,res)=>{
    try{
           const Schema= Joi.object({
            name:Joi.string().min(3).required(),
            content:Joi.string().required()
           });

           const {error}= Schema.validate(req.body,Schema);
           if(error) res.status(400).send(error.details[0].message);

           const course= new Course({
            name:req.body.name,
            content:req.body.content
           });

           course=await course.save();
           res.status(200).send(course);
    }catch(error){
        res.status(500).send(error)
    }
}

//creating the handler of the get the course

exports.getCourse = async(req,res)=>{
    try{
          const course=await Course.find();
          res.status(201).send(course);
    }catch(error){
        res.status(500).send(error)
    }
}

//creating the handle that get a user by id

exports.getAsingleCourse= async(req,res)=>{
    try{
        const course=await Course.findById(req.params.id);
        if(!course) res.status(404).send("course not found!");

        res.status(201).send(course);
    }catch(error){
        res.status(500).send(error);
    }
}

//creating a handler for updating the course


exports.updateCourse = async(req,res)=>{
    try{
        const course=await Course.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            content:req.body.content
        },{
            new:true
        });
        if(!course) res.status(404).send("course not found!");

        res.status(200).send(course)
    }catch(error){
        res.status(500).send(error)
    }
};

//creating a handler for deleting the course

exports.deleteCourse= async(req,res)=>{
    try{
        const course= await Course.findByIdAndDelete(req.params.id);
        if(!course) res.status(404).send("resource not found!");
        res.status(200).send(course)
    }catch(error){
        res.status(500).send(error);
    }
}
