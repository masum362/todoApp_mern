import express from 'express';
import { getallTodos,addTodo,deleteTodo } from '../controllers/auth-controllers.js';

const router = express.Router();

router.get('/',getallTodos).post('/',addTodo).delete('/:_id',deleteTodo)



export default router;