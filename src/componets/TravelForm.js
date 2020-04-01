import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class TravelForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName :'',
            lastName : '',
            age : '',
            gender : '',
            location : '',
            diet : {
                isVegan:false,
                isKosher:false,
                isLactoseFree:false
            }
        }
        this.handleChanged = this.handleChanged.bind(this)
    }

    handleChanged(event)
    {
        const {type,value,checked,name} = event.target;
        type==="checkbox"? this.setState({diet:{[name]:checked}})
                         : this.setState({[name]:value})
        console.log(name)
    }
    
    render() {
        return (
            <main>
                <form>
                    <input type="text" name="firstName" onChange={this.handleChanged} placeholder="First Name" /><br />
                    <input type="text" name="lastName" onChange={this.handleChanged} placeholder="Last Name" /><br />
                    <input type="text" name="age" onChange={this.handleChanged} placeholder="Age" /><br />
                    
                    <label>
                        Male
                        <input type="radio" name="gender"  value ="Male" checked={this.state.gender ==="male"} onChange={this.handleChanged} />
                    </label>
                    <label>
                        Female
                        <input type="radio" name="gender" value ="Female" checked={this.state.gender ==="female"} onChange={this.handleChanged} />
                    </label>
                    <br />
                    
                    <select name="location" onChange={this.handleChanged} value={this.state.location}>
                        <option value = "">-- Please Select am option -- </option>
                        <option value = "Tokyo"   >Tokyo</option>
                        <option value = "Madrid"  >Madrid</option>
                        <option value = "Victoria" >Victoria</option>
                        <option value = "London"   >London</option>
                        <option value = "Kingston" >Kingston</option>
                    </select>
                    <br />
                    
                    <label>
                        Vegan
                        <input type="checkbox" name="isVegan" checked={this.state.diet.isVegan} onChange={this.handleChanged} />
                    </label>
                    <br />
                    <label>
                        Kosher
                        <input type="checkbox" name="isKosher" checked={this.state.diet.isKosher} onChange={this.handleChanged} />
                    </label>
                    <br />
                    <label>
                        Lactose Free
                        <input type="checkbox" name="isLactoseFree" checked={this.state.diet.isLactoseFree} onChange={this.handleChanged}/>
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default TravelForm