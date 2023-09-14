import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./food.css";
import { Card } from "./Foodcard";
import { resList } from "../utils/Foodmock";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { withveglable } from "./Foodcard";

export const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchList,setserachList]=useState(" ");
  const [FilterItem,setFilterItems]=useState([]);
  const Restaurantcardwithveg = withveglable(Card)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"  );
    const jsonData = await data.json();
    setlistofRestaurants(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterItems( jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)
  };

  // if(listofRestaurants?.length===0){
  //   return<div className="loader"></div>
  // }
    const onlinestatus =useOnlineStatus("");
  
// if(onlinestatus===false)return (<h1 className="internet"> please check the online status</h1>);
 return (onlinestatus===false)?(<div className="internet">please check internet connecton</div>):(
  listofRestaurants?.length === 0 ? (
   <Shimmer/>
  ) : (
    <div className="body">
      <input type="text"  className="border-2 border-black m-4 " value={searchList} onChange={(e)=>{setserachList(e.target.value)}}></input>
      <button className="search bg-orange-300 m-1 px-1"  onClick={()=>{
        const filteritems =listofRestaurants?.filter((items)=>{return items?.info?.name.toLowerCase().includes(searchList.toLowerCase())})
        setFilterItems(filteritems)
      }}>Search</button>
        
      <button
        className="btn-list  bg-orange-300 m-1 px-1"
        onClick={() => {
          const data = listofRestaurants?.filter((res) => {
            return res?.info?.avgRating > 4.2;
          });
          setFilterItems(data);
          
        }}
      >
        Test filter data
      </button>
      <div className="res-container flex flex-wrap">
        {FilterItem?.map((restaurant) => (
          <Link to={"/Restaurant/"+ restaurant?.info?.id} key={restaurant?.info?.id}>
           {(restaurant?.info?.veg===true)?(<Restaurantcardwithveg resData={restaurant} />):(<Card resData={restaurant} />)} 
            </Link>
        ))}
      </div>
    </div>
  ));
};
