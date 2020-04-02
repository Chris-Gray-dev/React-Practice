import React from "react"
import MemeGeneratorView from "./MemeGeneratorView"
import MemeGeneratorHeader from "./MemeGeneratorHeader"
class MemeGenerator extends React.Component
{
    constructor()
    {
        super()
        this.state={
            topText : "",
            bottomText : "",
            image: "https://hotdogcat.com/hotdogcat.jpg",
            altText:"This is def alt",
            allMemes: []
        }
    }

    // https://api.imgflip.com/get_memes
    componentDidMount()
    {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => {
            const memes = res.data.memes
            this.setState({allMemes:memes})
        })
    }

    handleChange = (event) =>
    {
        const name  = event.target.name
        const value = event.target.value
        this.setState({[name]:value})
    }


    
    handleOnSubmit= (event) => {
        event.preventDefault()
        
        const numImgs = this.state.allMemes.length
        const imgNum = Math.floor(Math.random() * numImgs)

        const meme = this.state.allMemes[imgNum]
        
        const memeUrl = meme.url
        const memeAltText = meme.name

        this.setState({
            image:memeUrl,
            altText:memeAltText
        })
    }

    render()
    {
        const data = this.state
        return(
            
            <div>
                < MemeGeneratorHeader />
                < MemeGeneratorView data={data} 
                handleChange={this.handleChange} 
                handleOnSubmit={this.handleOnSubmit}/>
            </div>
        )
    }
}

export default MemeGenerator