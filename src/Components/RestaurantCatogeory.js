
import { ItemsList } from "./ItemsList"
 export const RestaurantCatogeory = ({data ,showItems,setShowIndex}) =>{
       const handleClick =()=>{
        setShowIndex()   
    }

    return (
        <div className="w-6/12 bg-gray-300 shadow-lg mx-auto my-4  p-2"> 
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
           <span className="font-bold text-sm">{data.title}:({data.itemCards.length})</span>
           <sapn>↓</sapn>
           </div>
           <div className="text-sm">
            {showItems && <ItemsList items={data.itemCards}/>}
           </div>
        </div>
    )
}