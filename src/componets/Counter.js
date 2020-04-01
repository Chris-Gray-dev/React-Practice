import React from 'react'

class Counter extends React.Component
{
    constructor()
    {
        super()
        this.state={}
    }

    render()
    {
        return(
            <h1>{this.props.count}</h1>
        )
    }
}

export default Counter