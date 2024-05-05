const express=require("express");
const app= express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const config=require("./config/config");
const routes=require("./routes/routes")


mongoose.connect(config.db.url,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log("connection to mongodb successfully!"))
.catch((error)=>console.log(error));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//import the routers
app.use("/courses",routes);

const port =config.port.nbr
app.listen(port,()=>{
    console.log(`app is running at port ${port}`);
})


