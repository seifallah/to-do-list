import React from "react"
const TodoItem = ({item}) => {
    return (<li className="todoItem--container">
        <span className="todoItem--name"><b>{item.name}</b></span>
        <span className="todoItem--desc"><i>{item.description}</i></span>
        <span className="todoItem--status"> --{item.status?"comleted":"not yet"}</span>
    </li> );
}
 
export default TodoItem;