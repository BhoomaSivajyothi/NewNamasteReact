import React, { useContext } from "react";
import  ReactDOM  from "react-dom/client";
import { CDN_URL } from "../utils/Foodcontants";
import { Usercontex } from "../utils/Usercontex";
export  const Card = (props) =>{
  const {logedin}=useContext(Usercontex)
  console.log(logedin)
  
    const {resData} = props || {}
  
    const {
        name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla, veg
    } = resData?.info || {}
  
    const { deliveryTime } = sla
     return (
        <>
        {veg && veg === true? <div>
        <label className=" border-2 border-black  absolute rounded m-2 px-1"> veg</label>
        </div>:<div>
        <label className=" border-2 border-black  absolute rounded m-2 px-1">non veg</label>
        </div> }
        <div className="res-card w-52 h-[450px] border-spacing-0 rounded-sm  bg-gray-100 hover:bg-gray-300 m-4 p-4 hover:bg-gr" >
            <img className="w-44  h-44"
            src={CDN_URL + cloudinaryImageId}
            alt="image" />
            <h3 className="text-xl text-gray">{name}</h3>
            <h4 className="text-sm">{cuisines.join(", ")}</h4>
            <h4 className="text-sm">{avgRating}</h4>
            <h4 className="text-sm">{costForTwo}</h4>
            <h4 className="text-sm">{deliveryTime}</h4>
            <h4 className="text-sm">{props.label}</h4>
            <h4 className="text-sm text-red-600">{logedin}</h4>
        </div>
        </>
    )
  }
 export const withveglable = (Card) =>{
  return (resData) =>{
    return(
       <div>
        <label className=" border-2 border-black text-red-400  absolute rounded mx-40 px-1">veg-Hoc</label>
        <Card {...resData}/>
        </div>  
    )
  }
}

  