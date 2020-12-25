import TodoItem from "./TodoItem";

const TodoList = ({data, handleDelete, handleEdit}) => {
    const listItems = data.map((val, index) =>
      <TodoItem key={index} item={val} handleDelete={handleDelete} handleEdit={handleEdit}/>
    );
    return <ul>{listItems}</ul>;
}
 
export default TodoList;