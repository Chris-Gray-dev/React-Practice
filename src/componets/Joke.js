import React from 'react'

function Joke(props)
{
    var pl = props.PunchLine
    var q = props.Question
    var joke = `${pl}`
    if(q != null)
    {
        joke = `Question: ${q}. Answer: ${joke}`
    }
    return(
    <div>
        <h1> {joke} </h1>
        <hr/>
    </div>);
}

export default Joke