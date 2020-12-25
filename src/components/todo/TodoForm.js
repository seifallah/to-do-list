import { useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

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
      <form>
            <div class="form-group">
                <TextField 
                    type="text" 
                    placeholder="task name" 
                    onChange={handleChange} 
                    name="name"
                    value={name}
                    variant="outlined" 
                    fullWidth
                />
            </div>

            <div class="form-group">
                <TextField 
                    placeholder="task description" 
                    onChange={handleChange} 
                    name="description"
                    value={description}
                    variant="outlined" 
                    fullWidth
                />
            </div>

            <div className="form-group">
                <RadioGroup aria-label="gender" name="status" value={status} onChange={handleChange}>
                    <FormControlLabel value="1" control={<Radio />} label="completed" />
                    <FormControlLabel value="0" control={<Radio />} label="not completed" />
                </RadioGroup>
            </div>
        <Button onClick={handleSubmit}
                variant="contained" 
                color="primary">{buttonLabel}
      </Button>
      </form>
    )
}
 
export default TodoForm;