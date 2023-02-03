const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");

dotenv.config()

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true},()=>console.log("database is connected"))

app.listen(process.env.PORT,()=>console.log(`port is running ${process.env.PORT}`))