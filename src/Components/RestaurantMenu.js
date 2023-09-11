import { useParams } from "react-router-dom"
import { Shimmer } from "./Shimmer"
import { useRestaurantMenu } from "../utils/useRestaurantMenu"
export const RestaurantMenu =()=>{

    const{resid}=useParams()
    const resInfo =useRestaurantMenu(resid)
   
    if(resInfo===null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards[0]?.card?.card?.info
    const {itemCards}=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
   console.log(itemCards)
//    const {name,price,defaultprice}=item.card.info.
    return(
 
        <div className="menu m-3 ">
            <h1 className="text-lg">{name}</h1>
            <p className="text-sm">{cuisines} : {costForTwoMessage}</p>
            <h1 className="text-lg">Menu</h1>
            <ul className="text-sm"> 
                {itemCards?.map((item)=><li key={item?.card?.info?.id}>
                {item?.card?.info?.name}:RS:{item?.card?.info?.price ||item?.card?.info?.defaultPrice}:</li>)}
            </ul>
        </div>
    )
    
}
