import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./food.css";
import { Card } from "./Foodcard";
import { resList } from "../utils/Foodmock";
export const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchList,setserachList]=useState("");
  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setlistofRestaurants(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };


  // if(listofRestaurants?.length===0){
  //   return<div className="loader"></div>
  // }

  return listofRestaurants?.length === 0 ? (
    <div className="loader"></div>
  ) : (
    <div className="body">
      <input type="text" value={searchList} onChange={(e)=>{setserachList(e.target.value)}}></input>
      <button className="search" onClick={()=>{
        const filteritems =listofRestaurants?.filter((items)=>{return items?.info?.name.toLowerCase().includes(searchList.toLowerCase())})
        setlistofRestaurants(filteritems)
      }}>Search</button>
        
      <button
        className="btn-list"
        onClick={() => {
          const data = listofRestaurants?.filter((res) => {
            return res?.info?.avgRating > 4.2;
          });
          setlistofRestaurants(data);
          
        }}
      >
        Test filter data
      </button>
      <div className="res-container">
        {listofRestaurants?.map((restaurant) => (
          <Card key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
