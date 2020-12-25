import {React, useState } from "react";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    return ( <div>
            <h1>TodoPage</h1>
            <TodoForm handleSubmit={addTodo} />
            <TodoList data={todos}/>
    </div> );
}
 
export default TodoPage;