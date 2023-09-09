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
      <div className='flex flex-wrap justify-between bg-pink-400'>
      
        <div className='logo-container w-20'>
          <img className="bg-pink-400" src={LOGO_URL}></img>
        </div>
        <div className='nav-items '>
          <ul className="flex flex-wrap justify-center m-2">
            <li className="m-2 px-3"><Link to="/">Home</Link> </li>
            <li className="m-2 px-3"><Link to="/About">About</Link></li>
            <li className="m-2 px-3"><Link to="/Contact">contact-us</Link></li>
            <li className="m-2 px-3"><Link to="/Grocery">Gerocery</Link></li>
            <li className="m-2 px-3">cart</li>
            <button className="bg-white m-1 p-1 rounded" onClick={()=>{
              setIsLogin((!isLogin))
            }}>{isLogin?"logout":"login"}</button>
          </ul> 
        </div>
        
      </div>
    )
}



