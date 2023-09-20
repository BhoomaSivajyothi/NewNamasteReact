import { CDN_URL } from "../utils/Foodcontants"
import Cartslice, { RemoveItems, addItem } from "../utils/Cartslice"

import { useDispatch } from "react-redux"


export const ItemsList = ({items,fromcart=false})=>{
   const dispatch= useDispatch()
  const handleadditems =(item)=>(
   // console.log(item),
    dispatch(addItem(item))
  )
  const handleremoveitems =(sj)=>(

    // items.find((removeitem)=>(removeitem===item)),
    console.log(sj.card.info.id),
    dispatch(RemoveItems(sj))
  )
   
   //  console.log(items)
    return(
        <div>
     <div>
        {items.map((item) =>
         (
            <div key={item?.card?.info?.id} className=" flex justify-between p-2 mx-2 bottom-2 text-left border-gray-600 border-b-2" >
             <div className="w-9/12">
             <div className="text-xs  font-bold">
                {item?.card?.info?.name}
                :₹{item?.card?.info?.price ?item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}
             </div>    
            <p className="text-xs m-3">{item?.card?.info?.description}</p> 
            </div>
              <div className="w-3/12" >
                <div className="absolute ">
               <button className= " mx-1 my-20 border-2 border-white rounded bg-black text-white" onClick={()=>handleadditems(item)}>Add +</button>
              { fromcart && <button className= " mx-1 my-2 border-2 border-white rounded bg-red-400 text-white" onClick={()=>handleremoveitems(item)}>Delete</button>}
               </div>
                   <img src={CDN_URL+(item?.card?.info?.imageId)} className="w-32"></img>
                  </div>
             </div>
         )  
       )}
     </div>
        </div>  
    )
}