import {React, useState } from "react";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import { v4 as uuidv4 } from 'uuid';
import {  useHistory} from "react-router-dom";

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
            <h1>TodoPage</h1>
            {connected!==null&& <button onClick={logOut}>Deconnexion</button> }

            <TodoForm handleSubmit={handleTodo} todo={todo} />
            <TodoList data={todos} handleDelete={deleteTodo} handleEdit={(todo) => setTodo(todo)}/>
    </div> );
}
 
export default TodoPage;