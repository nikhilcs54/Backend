const mongoose=require("mongoose")

//route handler

const likeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",         //ref to the post model
      },
      user:{
          type:String,
          required:true,
      },
      body:{
          type:String,
          required:false,
      }
});


//exports
module.exports=mongoose.model("Like",likeSchema);