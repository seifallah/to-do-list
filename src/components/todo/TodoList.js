import TodoItem from "./TodoItem";

const TodoList = ({data}) => {
    const listItems = data.map((val, index) =>
      <TodoItem key={index} item={val}/>
    );
    return <ul>{listItems}</ul>;
}
 
export default TodoList;