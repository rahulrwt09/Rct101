function TodoItem({id,title,status, handleToggle, handledelete }){
  // const =props;
  return(
    <div key={id} style={{display:'flex', alignItems:'center',WebkitJustifyContent:'center',
    }}>
     <p>{title}
     {" ----->  "}
     {status?"Complete":"Not complete"}
    </p>
    
    <button onClick={()=>handleToggle(id)}>Toggle</button>
    <button onClick={()=>handledelete (id)}>Delete</button>
  </div>



  );

}
export default TodoItem;