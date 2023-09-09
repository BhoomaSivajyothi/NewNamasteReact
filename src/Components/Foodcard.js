import React from "react";
import  ReactDOM  from "react-dom/client";
import { CDN_URL } from "../utils/Foodcontants";
export const Card = (props) =>{
    const {resData} = props || {}
  
    const {
        name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla
    } = resData?.info
  
    const { deliveryTime } = sla

     
    return (
        <div className="res-card w-52 h-96 border-spacing-0 rounded-sm  bg-gray-100 hover:bg-gray-300 m-4 p-4 hover:bg-gr" >
            <img className="w-44  h-44"
            src={CDN_URL + cloudinaryImageId}
            alt="image" />
            <h3 className="text-xl text-gray">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
  }
  