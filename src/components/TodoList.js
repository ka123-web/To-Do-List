import React from 'react';
import Todo from './Todo';

const TodoList =({todos,setToDos})=> {
    return (
       
    <div className="todo-container">
      <ul className="todo-list">
     {todos.map(todo =>(
         <Todo todo ={todo} text = {todo.text} setToDos = {setToDos} todos={todos} id={todo.id}  key={todo.id}/>
     ))}
      </ul>
    </div>
        
    )
}

export default TodoList

