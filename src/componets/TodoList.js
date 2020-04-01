import React from 'react';
import TodoItem from './TodoListItems/TodoItem'
import todosData from '../Data/todosData'

function TodoList()
{
    var todoComponets = todosData.map(item=>{
        return(<TodoItem key={item.id} Task={item.text} Value={item.completed}/>)
    })
    return(
        <div className = "todo-list">
            {todoComponets}
        </div>

    );
}

export default TodoList