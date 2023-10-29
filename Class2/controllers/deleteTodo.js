//import th model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async(req,res) => {
    try {
           const {id}=req.params; 
           const todo=await Todo.findByIdAndDelete(id)

           res.status(200)
           .json({
               success:true,
               message:"Data Deleted Successfully",
           })

    }
    catch(err) {
        console.log(err);
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
}