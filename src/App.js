import React from 'react';
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


//import TodoList from './componets/TodoList' // DONE!!!!
import TravelForm from './componets/TravelForm'
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={

    }
   
  }
  componentDidMount()
  {
    console.log("mounted")
  }

  
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <TravelForm />
        </header>
      </div>
    );
  }
}

export default App
