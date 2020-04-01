import React from 'react'

function Conditional(props)
{
    let text = (false)?"loading..." :"Done loading!!!";
    return(
    <h1>{text}</h1>
    )
}

export default Conditional