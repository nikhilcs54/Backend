

const express=require("express");

const app=express();


require("dotenv").config();

const PORT=process.env.PORT || 4000;

app.use(express.json());


const dbConnect=require("./config/database");

dbConnect();


const user = require("./routes/user")
//mount
app.use("/api/v1",user);


app.listen(4000, () => {
    console.log(`App is started at Port no 4000`);
})

app.get("/", (req,res) => {
    res.send(`<h1>This is my homePage baby</h1>`)
})