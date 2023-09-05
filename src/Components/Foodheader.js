import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../Components/food.css";
import {LOGO_URL} from "../utils/Foodcontants"
import { Body } from "./Foodbody";
import { Link } from "react-router-dom";
export const Food = () => {
  return (
    <div>
       <Header></Header>
       <Body></Body> 
    </div>
  )
}


 export const Header = () =>{
  const[isLogin,setIsLogin]=useState(false)
      
    return (
      <div className='header'>
        
        <div className='logo-container'>
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className='nav-items'>
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">contact-us</Link></li>
            <li>cart</li>
            <button className="log-in" onClick={()=>{
              setIsLogin((!isLogin))
            }}>{isLogin?"logout":"login"}</button>
          </ul>
         
        </div>
        
      </div>
    )
}



