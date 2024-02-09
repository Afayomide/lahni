import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import modal from "./assets/modal.jpg"
import {Route, Routes} from 'react-router-dom';
import "./components/clothes/clothes.css"
import Header from './components/header/header';
import Footer from "./components/footer/footer"
import Home from './components/home/home';
import Caps from "./components/caps/caps"
import Trouser from "./components/trouser/trouser"
import Shirt from "./components/shirt/shirt"
import AboutShirt from './components/clothes/aboutclothes';
import { CartProvider } from './components/context';
import Cart from './components/cart/cart';
import { ItemProvider } from './components/filecontext';
import { uniqueArray } from './components/clothes/clothes';

function App() {
  // State to track the visibility
  const [isVisible, setIsVisible] = useState(true);
  
  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <CartProvider>
    <ItemProvider>
    <div className="App"> 
    {isVisible ?  <div className="modals">
        <div className="home-modal-container">
        <button onClick={toggleVisibility}>X</button>
          <img className="home-modal" src={modal}/>
        </div>
        </div> : ""}
       <Header/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Caps/>} path='/cap'/>
      <Route element={<Trouser/>} path='/trouser'/>
      <Route element={<Shirt/>} path='/shirt'/>  
      <Route element={<AboutShirt/>} path="/:id"/>
      <Route element={<Cart/>} path="/cart"/>
    </Routes>
     <Footer/>
    </div>
    </ItemProvider>
    </CartProvider>
  );
}

export default App;
