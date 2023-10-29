const mongoose=require("mongoose")

//route handler

const postSchema=new mongoose.Schema({
    post:{
        type:String,
        required:true,
      },
      user:{
          type:String,
          required:true,
      },
      body:{
          type:String,
          required:true,
      },
      likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
      }],
      comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
      }],
});


//exports
module.exports=mongoose.model("Post",postSchema);