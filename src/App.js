import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText,setinputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
//run only once when the app start
useEffect(()=>{
getLocalTodos();
},[]
)
  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  }, [todos,status]);

  const filteredHandler = () =>
  {
    
    switch(status)
    {
      case "completed":
        setfilteredTodos(todos.filter(todo => todo.completed === true ));
          break;
        
        case "uncompleted":
          setfilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        
        case "default":
          setfilteredTodos(todos);
          break;
       
    }
  }

  //save to local
  const saveLocalTodos =() =>
  {
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  const getLocalTodos =() =>
  {
    if(localStorage.getItem('todos') === null)
    {
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setToDos(todoLocal);
    }
  }
 
  return (
    <div className="App">
      <h1>ToDo List {inputText}</h1>
      <Form 
        inputText = {inputText} 
        todos ={todos} 
        setToDos = {setToDos} 
        setinputText={setinputText}
        setStatus = {setStatus}
        
       />

      <TodoList todos ={todos} setToDos = {setToDos}   />
    </div>
  );
}

export default App;
