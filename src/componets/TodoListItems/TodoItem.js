import React from'react'

class TodoItem extends React.Component
{
    constructor()
    {
        super()
        this.state={}
    }

    render()
    {
        var CompletedStyle={textDecorationLine:"line-through",fontStyle:"italics",color:"gray"}
        var inCompleteStyle ={fontWeight:"bold"}
        return(
            <div className="todo-item">
                <input onChange={(event)=>{this.props.changeHandler(this.props.Task.id)}} type="checkbox" checked={this.props.Task.completed}/>
                <p style={this.props.Task.completed ?CompletedStyle:inCompleteStyle}>{this.props.Task.text}</p>
            </div>
        )
    }
}

export default TodoItem