//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
            //fetch all items from database

            const todos=await Todo.find({})

            //response

            res.status(200)
            .json({
                success:true,
                data:todos,
                message:"Entire Todo data is fetched",
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

exports.getTodoById = async(req,res) => {
    try {
           //extract todo items on the basis of id

           const id=req.params.id;
           const todo=await Todo.findById({_id:id})

           //if data for given id is not found

           if(!todo){
            return res.status(404).json(
                {
                    success:false,
                    message:"No Data Found",
                }
            )
           }
       

           //if found
           res.status(200)
           .json({
               success:true,
               data:todo,
               message:"Todo data for given Id is fetched",
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