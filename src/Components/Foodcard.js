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
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
            <img 
            src={CDN_URL + cloudinaryImageId}
            alt="image" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
  }
  