import { useParams } from "react-router-dom"
import { Shimmer } from "./Shimmer"
import { useRestaurantMenu } from "../utils/useRestaurantMenu"
import { RestaurantCatogeory } from "./RestaurantCatogeory"
import { useState } from "react"
export const RestaurantMenu =()=>{
    const{resid}=useParams()
    const resInfo =useRestaurantMenu(resid)
    const[showIndex,setShowIndex]=useState(null)
   
    if(resInfo===null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards[0]?.card?.card?.info
    const {itemCards}=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||{}
    const Categeory= resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c?.card?.["card"]?.['@type']=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    return(
 
        <div className="menu m-3 text-center">
            <h1 className="text-xs font-bold ">{name}</h1>
            <p className="text-xs font-bold">{cuisines}</p>  
           {Categeory.map((ItemCategory,index) => (<RestaurantCatogeory key={ItemCategory?.card?.card?.title} 
           data={ItemCategory?.card?.card}
           showItems={index===showIndex?true:false}
           setShowIndex={()=>(setShowIndex(index))}
           />       
           
         )   
           )}
        </div>
    )
    
}
