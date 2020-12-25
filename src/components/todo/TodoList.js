import TodoItem from "./TodoItem";
import List from '@material-ui/core/List';

const TodoList = ({data, handleDelete, handleEdit}) => {
    const listItems = data.map((val, index) =>
      <TodoItem key={index} item={val} handleDelete={handleDelete} handleEdit={handleEdit}/>
    );
    return  <List component="div" aria-label="todos-list">{listItems}</List>;
}
 
export default TodoList;