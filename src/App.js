import React, { useState,useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';

//import MyName from'./componets/MyName.js'
//import MyInfo from'./componets/MyInfo.js'
//import MyVacations from'./componets/MyVacations.js'

//import Navbar from'./componets/Navbar'
//import MainContent from './componets/MainContent'
//import Footer from'./componets/Footer'



//import Joke from './componets/Joke'
//import jokesData from './Data/jokesData'

//import products from './Data/products';
//import Product from "./componets/Product";
//function App() {
//
//  return (
//    <div className="App">
//      <header className="App-header">
//        <TodoList />
//      </header>
//    </div>
//  );
//}

//import Counter from './componets/Counter'

//import Conditional from './componets/Conditional'

//import LoginButton from "./componets/LoginButton"


/* Projects that i have done, uncomment and add it to the render method */
//import TodoList from './componets/TodoList' // DONE!
//import TravelForm from './componets/TravelForm' // DONE!
//import MemeGenerator from "./componets/MemeGenerator/MemeGenerator" //DONE !


function App()
{ 
    const [count, setCount] = useState(0)

    function inc()
    {
      setCount(prev =>(prev +1))
    }

    useEffect(()=>{
      console.log("Mounted")
    },[])

    function dec()
    {
      setCount(prev => prev-1)
    }
    return (
      <div className="App">
        <header className="App-header">
            <h1>{count}</h1>
            <button onClick={inc}>Increase!</button>
            <button onClick={dec}>Decrease!</button>
        </header>
      </div>
    );
}


export default App
