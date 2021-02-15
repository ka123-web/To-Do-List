import React from 'react'

const Form =({inputText, setinputText, todos, setToDos,setStatus})=> {
    
    const inputTextHandler = (e) =>{
        setinputText(e.target.value)
    }

    const submitTodoListHandler = (e) =>
    {
        console.log('inputtext',inputText);
        e.preventDefault();
        setToDos([
            ...todos, {text: inputText,completed:false, id:Math.random()*1000}
        ])
        setinputText("");
    }
    const statusHandler = (e) =>
    {
        console.log(e.target.value);
        setStatus(e.target.value);
        
    }

    return (
       <div>
        <form>
        <input 
        value ={inputText}
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input"/>

        <button onClick={submitTodoListHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div onChange={statusHandler} className="select">
            <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    </div>
       
    );
};

export default Form;