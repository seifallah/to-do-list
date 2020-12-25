import { useState } from "react";

const TodoForm = (props) => {
    const [ task, setTask ] = useState({name:"",description:"", status:""});
    
    const handleChange =(e) => {
      setTask({...task, [e.target.name]:e.target.value});
    }
      
    const handleSubmit =(e) => {
      if(Object.keys(task).length>0) {
        props.handleSubmit(task);
        setTask({name:"",description:"", status:""});
      }
      e.preventDefault();
    }
    const {name, description, status} = task;
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="task name" 
          onChange={handleChange} 
          name="name"
          value={name} />

        <input type="text" 
          placeholder="task description" 
          onChange={handleChange} 
          name="description"
          value={description} />

        <input type="text" 
          placeholder="task status" 
          onChange={handleChange} 
          name="status"
          value={status} />


        <button type="submit">Add</button>
      </form>
    )
}
 
export default TodoForm;