import React from "react"


function LoginButton(props)
{
    let text = (props.loggedIn) ? "Logout" :"Login"
    return(
        <button onClick={()=>{props.clickHandler()}}>{text}</button>
    )
}

export default LoginButton