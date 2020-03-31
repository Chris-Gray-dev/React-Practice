import React from 'react';

function Product(props)
{
    var price = ""
    if(props.Price == 0)
    {
        price ="Free!"
    }
    else
    {
        price = props.Price.toLocaleString("en-US",{style:"currency",currency: "JPY"})
    }
    return(
        <div>
            <h1>{props.Name}</h1>
            <h2>{price}</h2>
            <p>{props.Desc}</p>
            <hr/>
        </div>
    )
}

export default Product