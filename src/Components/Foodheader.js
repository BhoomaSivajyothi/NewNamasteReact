import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
// import "../Components/food.css";
import {LOGO_URL} from "../utils/Foodcontants"
import { Body } from "./Foodbody";
import { Link } from "react-router-dom";
import { Usercontex } from "../utils/Usercontex";
import { useSelector } from "react-redux";


// export const Food = () => {
//   return (
//     <div>
//        <Header></Header>
//        <Body></Body> 
//     </div>
//   )
// }


 export const Header = () =>{
  const cart= useSelector((store)=>store.cart)
  // console.log(cart)
  
  const{items,quantity}=cart||{}
  console.log(items,quantity)
  const totalquantity=items.reduce((acc,items)=>acc+items.cartQuantity,0)
  // 3) [{…}, {…}, {…}]=items
  // 0
  // : 
  // {card: {…}, cartQuantity: 1}=items[0],card,cartquantity ,{items[0].cartquantity}
  // 1
  // : 
  // {card: {…}, cartQuantity: 1}=items[1],card,cartquantity,{items[1].cartquantity}
  // 2
  // : 
  // {card: {…}, cartQuantity: 1}=items[2],card,cartquantity,{items[2].cartquantity}
  // length
  // : 
  // 3
  // [[Prototype]]
  // : 
  // Array(0)


  console.log(totalquantity)
  const[isLogin,setIsLogin]=useState(false)
  const {logedin} =useContext(Usercontex)
     
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
            <li className="m-2 px-3"><Link to="/Cart">Cart:{totalquantity}items</Link></li>
            <button className="bg-white m-1 p-1 rounded " onClick={()=>{
              setIsLogin((!isLogin))
            }}>{isLogin?"logout":"login"}</button>
            <li className="m-2 px-3">{logedin}</li>
          </ul> 
        </div>
      </div>
    )
}



