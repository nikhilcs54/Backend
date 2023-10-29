
const express=require("express");
const app=express();

require("dotenv").config();

const PORT=process.env.PORT || 3000;


//middleware

app.use(express.json());

const blog=require("./routes/blog")

//mount

app.use("/api/v1",blog);


const dbConnect=require("./config/database")
dbConnect();

//start the server

app.listen(4000,()=>{
  console.log("Server is running on 4000 port");
})

//adding default route

app.get("/",(req,res)=>{
 res.send("This is Homepage");
})