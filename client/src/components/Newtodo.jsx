import React, {useState} from 'react'
import axios from 'axios'

import style from './newtodo.module.css'
const Newtodo = () => {
    const [todo,setTodo] = useState({title:"",description:""})
    const {title, description} = todo;
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTodo({...todo,[name]:value});
    }

    // console.log(todo)
    const handleSubmit =async (e) => {
        e.preventDefault();
        if(todo.title ==='' || todo.description===''){
            alert('please fill the boxes')
        }
        else{
           await axios.post('http://localhost:2001/',todo,{
                headers: {'Content-Type': 'application/json'}
            }).then(res => console.log(res)).catch(err => console.log(err))
        }
        setTodo({title:"",description:""})
        
    }

    return (
   <form className={style.form} onSubmit={handleSubmit}>
    <div className={style["form-field"]}>
        <label htmlFor="title">Title : </label>
        <input type="text" id='title' name='title' value={title}  onChange={handleChange} />
    </div>
    <div className={style["form-field"]}>
        <label htmlFor="descrption">Description : </label>
        <textarea name="description" id="description" value={description} onChange={handleChange}  ></textarea>
    </div>
    <button type='submit'>Add Todo</button>
   </form>
  )
}

export default Newtodo