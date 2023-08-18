import React from "react";
import ReactDOM from "react-dom/client";
import "./food.css";
import { Card } from "./Foodcard";
import { resList } from "../utils/Foodmock";
export const Body = () => {
    return(
      <div className="body">
        <div className="search">
           search
        </div>
        <div className="res-container">
        
          {resList.map((restaurant) => (
            <Card key={restaurant.info.id} resData={restaurant}/>
        ))}
    
        </div>
  
      </div>
    )
  }
  