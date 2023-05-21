import React from 'react'

import Todo from './Todo'
import style from './todos.module.css'

function Todos(props) {
  return (
    <section className={style.todos}>
        {props.todos.map(todo => <Todo todo={todo} key={todo._id}/>)}
    </section>
  )
}

export default Todos
