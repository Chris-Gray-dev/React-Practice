import React from 'react';
import TodoItem from './TodoListItems/TodoItem'
import todosData from '../Data/todosData' // Fake an API call

class TodoList extends React.Component
{
    constructor()
    {
        super()
        
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id)
    {
        console.log(`changing states ${id}` )
        this.setState(prevState =>
            {
                let newStateArr = prevState.todos.map(prev =>{
                    
                    if(prev.id === id)
                    {
                        return{
                            ...prev,
                            completed:!prev.completed
                        }
                    }
                    return(prev)

                })
                return({todos:newStateArr})
            }) 
        
    }
    render()
    {
        var todoComponets = this.state.todos.map(item=>{
            return(<TodoItem key={item.id} Task={item} changeHandler ={this.handleChange}/>)
        })
        
        return(
            <div className = "todo-list">
                {todoComponets}
            </div>

        );
    }
}

export default TodoList