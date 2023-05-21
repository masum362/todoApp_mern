import mongoose from "mongoose";

const todoSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})


const todoModel =new mongoose.model('todo',todoSchema);

export default todoModel;