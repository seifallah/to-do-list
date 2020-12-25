import {React, useState } from "react";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const initialTodos = storedTodos!==null?storedTodos:[];
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (todo) => {
        const items = [...todos, todo]; 
        setTodos(items);
        localStorage.setItem('todos', JSON.stringify(items) );
    }

    return ( <div>
            <h1>TodoPage</h1>
            <TodoForm handleSubmit={addTodo} />
            <TodoList data={todos}/>
    </div> );
}
 
export default TodoPage;