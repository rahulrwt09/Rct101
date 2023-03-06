import React from "react";

function AddTodo({handleAdd}){
      const [text, setText]= React.useState("");
      const handleChange= (e)=>{
        setText(e.target.value);


    };
    const handleAddTodo= () =>{
        handleAdd(text);
        setText("");
    };

    return (
 
    <div>
        <input
        value={text}
        onChange={handleChange}
        placeholder="Add a new todo"

        />
 <button onClick={handleAddTodo}>Add Button</button>
    </div>

    );
}
export default AddTodo;
