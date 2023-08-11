import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Category from './components/Category';


export default class App extends Component {

    state={
      country:'in',
      category:'general'
    }
  
     selectCategory=(cValue,ctValue)=>{
       this.setState({country:cValue,category:ctValue})
    }
  render() {
    let a = this.state.country+this.state.category;
    return (
     
      <Router>
        
      <Navbar/>
      <Category selectCategory ={this.selectCategory}/>
      <Routes>
         <Route exact path='/' element={<News key={a} country={this.state.country} category={this.state.category}/>}/>
         
         
         </Routes>
      
         </Router>
    )
  }
}
