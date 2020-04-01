import React from'react'

function TodoItem(props)
{
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.Value}/>
            <p>{props.Task}</p>
        </div>
    )
}

export default TodoItem