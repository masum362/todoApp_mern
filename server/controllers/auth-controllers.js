import express from 'express';
import todoModel from '../model/todoSchema.js';

export const getallTodos =async (req, res) => {
    try {
        const allTodo =await todoModel.find({});
        return res.status(201).json(allTodo)
        
    } catch (error) {
        return res.status(500).json({message:"somethine went wrong"})
    }
}

export const addTodo = async(req, res) => {
    const todo = req.body;
    console.log(req.body)
    const newTodo =await todoModel(todo);
    try {
        const saveTodo = await newTodo.save();
        console.log(saveTodo)
        return res.json(saveTodo).status(201)
    } catch (error) {
        // console.log(error)
        return res.status(500).json({message:"somethine went wrong"})
    }
    
}
export const deleteTodo = async(req, res) => {
    const _id = req.params._id;

  try{
    const deletedTodo = await todoModel.deleteOne({_id: _id});
    return res.status(201).json({message:"deleted successfully"})

  }catch(err){
    return res.status(500).json({message:"somethine went wrong"});
  }
    
}