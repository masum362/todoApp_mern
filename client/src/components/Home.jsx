import React, { useEffect, useState } from 'react';
import { v4 as uuid4 } from 'uuid';

import style from './home.module.css';
import Todos from './Todos';
import Newtodo from './Newtodo';
import axios from 'axios';



const Home = () => {

  const [todos, setTodos] = useState([])

  const getAlltodo = async () => {
    await axios.get('http://localhost:2001/').then((todos) => setTodos(todos.data)).catch((error) => console.log(error))
  }

  useEffect(() => {
    getAlltodo();
  }, [todos])

  // const handleAddTodo = (todo) =>{

  //   setTodos((prevTodo) =>{
  //     return[...prevTodo , {id:uuid4(), todo}]
  //   })
  // }
  // const handleRemoveTodos = (id) => {
  //   // const filterTodos = todos.filter((todo)=> todo.id !==id );
  //   setTodos((prevTodo) => {
  //     const filterTodos = prevTodo.filter((todo) => todo.id !== id);
  //     return filterTodos;
  //   });
  // }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Todo App</h1>
      <Newtodo />
      <Todos todos={todos}/>
    </div>
  )
}
export default Home
