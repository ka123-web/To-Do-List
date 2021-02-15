import React from 'react'

const Todo = ({text,setToDos,todos,todo}) => {
   console.log('todos',todos);
    const deleteEventHandler=() =>
    {
       setToDos(todos.filter((el)=>el.id !== todo.id))
    }

    const completeHandler =() =>
    {
         setToDos(todos.map(item =>{
             if(item.id === todo.id){
                 return{
                     ...item,completed:!item.completed
                 }
             }
             return item;
         }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed? "completed":""}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteEventHandler} className="complete-btn">
                <i className="fas fa-trash"></i>
            </button>
            
            
        </div>
    )
}

export default Todo
