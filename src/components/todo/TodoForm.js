import { useState, useEffect} from "react";

const emptyTodo = {id:"", name:"",description:"", status:""};

const TodoForm = (props) => {
  
    const [ task, setTask ] = useState(emptyTodo);
    const [buttonLabel, setButtonLabel] = useState('Add');

    useEffect(() => {
      if(Object.keys(props.todo).length>0) {
          setTask(props.todo);
          setButtonLabel("Edit")
        }
    }, [props.todo])

    const handleChange =(e) => {
      setTask({...task, [e.target.name]:e.target.value});
    }
      
    const handleSubmit =(e) => {
      if(Object.keys(task).length>0) {
        props.handleSubmit(task, buttonLabel);
        setTask(emptyTodo);
        setButtonLabel("Add")
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


        <button type="submit">{buttonLabel}</button>
      </form>
    )
}
 
export default TodoForm;