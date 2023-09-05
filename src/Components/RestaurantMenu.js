import { useEffect ,useState} from "react"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/Foodcontants"
import { Shimmer } from "./Shimmer"


export const RestaurantMenu =()=>{
    const [resInfo,setResInfo]=useState(null)
    const{resid}=useParams()
    useEffect(()=>{fetchData()},[])
    const fetchData = async () =>{
    const data= await fetch(MENU_URL+resid)
    const jsonData= await data.json()
    console.log(jsonData)
    setResInfo(jsonData)
    } 

    if(resInfo===null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards[0]?.card?.card?.info
    const {itemCards}=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
   console.log(itemCards)
//    const {name,price,defaultprice}=item.card.info.
    return(
 
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines}:{costForTwoMessage}</p>
            <h1>Menu</h1>
            <ul>
                {itemCards?.map((item)=><li key={item?.card?.info?.id}>
                {item?.card?.info?.name}:RS:{item?.card?.info?.price ||item?.card?.info?.defaultPrice}:</li>)}
            </ul>
        </div>
    )
    
}