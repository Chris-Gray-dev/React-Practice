import React from 'react';

function MemeGeneratorView(props)
{

    return(
    <div>

        <form className ="meme-form" >
            <input type="text" name="topText"    value={props.data.topText} placeholder="Top Text"    onChange={props.handleChange} />
            <input type="text" name="bottomText" value={props.data.bottomText} placeholder="Bottom Text" onChange={props.handleChange} />
            <button onClick={props.handleOnSubmit}>Gen</button>
        </form>

        <div className="meme">
            <img src={props.data.image} alt={props.data.altText}/>
            <h2 className="top"    >{props.data.topText}</h2>
            <h2 className="bottom" >{props.data.bottomText}</h2>
        </div>
        
    </div>
  );
}

export default MemeGeneratorView;
