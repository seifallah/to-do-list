import {React, useState } from "react";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import { v4 as uuidv4 } from 'uuid';
import {  useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const TodoPage = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const initialTodos = storedTodos!==null?storedTodos:[];
    const [todos, setTodos] = useState(initialTodos);
    const [todo, setTodo] = useState({});
    const connected= localStorage.getItem("loggedUser");
    const history = useHistory();

    const logOut =() => {
        localStorage.removeItem("loggedUser");
        history.push('/')
    }

    const saveToLocalStorage =(data) =>  {
        localStorage.setItem('todos', JSON.stringify(data) );
    }
    const addTodo = (todo) => {
        todo.id = uuidv4(); 
        const items = [...todos, todo]; 
        setTodos(items);
        saveToLocalStorage(items);
    }
    const deleteTodo =(item) => {
        const filteredTodos = todos.filter(todo => todo.id !== item.id);
        setTodos(filteredTodos);
        saveToLocalStorage(filteredTodos);
    }

    const editTodo =(item) => {
        const filteredTodos = todos.filter(ele => ele.id !== item.id);
        setTodos([...filteredTodos,item]);
        saveToLocalStorage(filteredTodos);
    }

    const handleTodo = (task, op) => {
        if(op==="Add") {
            addTodo(task)
        }
        else {
            editTodo(task)
        }
    }

    return ( <div>
            <div className="title"><span>TodoPage</span>{connected!==null&&<Button onClick={logOut} variant="contained">Deconnexion</Button> }</div>
            <Box component="div" m={1}>
                <Card>
                    <CardContent>
                        <h3>Todo form</h3>
                        <TodoForm handleSubmit={handleTodo} todo={todo} />
                    </CardContent>
                </Card>
            </Box>
            <Box component="div" m={1}>
                <Card>
                    <CardContent>
                        <h3>Todo List</h3>
                        <TodoList data={todos} handleDelete={deleteTodo} handleEdit={(todo) => setTodo(todo)}/>
                    </CardContent>
                </Card>
            </Box>

    </div> );
}
 
export default TodoPage;