import React from 'react';
import TodoItem from './TodoListItems/TodoItem'

function TodoList()
{
    return(
        <div className = "todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>

    );
}

export default TodoList