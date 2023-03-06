
import './App.css';
import React from "react";
import AddTodo from "./Components/AddTodo"
import TodoItem from "./Components/TodoItem"




function App() {
 const [todos, setTodos]= React.useState([]);
    
 const handleAdd= (text)=>{
      const newTodo= 
      {
          title:text,
          status:false, 
          id:Math.random()
      };
    
    setTodos([...todos, newTodo]);
    };

    const handleToggle= (id)=>{
      
    const todoafterupdate=todos.map((todo)=>{
      return todo.id===id?{...todo,status:!todo.status}:todo;}

    );
      
    setTodos(todoafterupdate);
    };
   
  const handledelete = (id)=>{
    const todoafterdelete=todos.filter((todo)=>todo.id!==id);
    setTodos(todoafterdelete);
  }

    console.log(todos);


  return (
    <div className="App">
       <AddTodo handleAdd= {handleAdd}/>

       <div>
        {todos.map((el)=> (
          <TodoItem
          key={el.id}
         title={el.title}
         status={el.status}
         id={el.id}
         handleToggle= {handleToggle}
         handledelete={handledelete}
          />))}
   
       </div>
    </div>
  );
}

export default App;
 