import React from "react";
import ReactDOM from "react-dom/client";
import "../Components/food.css";
import {LOGO_URL} from "../utils/Foodcontants"
import { Body } from "./Foodbody";
export const Food = () => {
  return (
    <div>
       <Header></Header>
       <Body></Body> 
    </div>
  )
}


const Header = () =>{
    return (
      <div className='header'>
        
        <div className='logo-container'>
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className='nav-items'>
          <ul>
            <li> <a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">contact-us</a></li>
            <li><a href="#">cart</a></li> 
          </ul>
        </div>
      </div>
    )
}



