import React from 'react';
import axios from 'axios';

import style from './todo.module.css'

const Todo = (props) => {
  const handleTrush =async (_id) =>{
    console.log(_id)
    await axios.delete(`http://localhost:2001/${_id}`,{
      headers: {'Content-Type': 'application/jso{_id}n'}
  }).then(res => console.log(res)).catch(err => console.log(err))
  }
    const {title,description,_id} = props.todo
  return (
    <article  className={style.todo}>
        <div >
           <h3> {title}</h3>
            <p>{description}</p>
            
        </div>
        <div>
                <button className={style.btn} onClick={()=>handleTrush(_id)}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
    </article>
  )
}

export default Todo