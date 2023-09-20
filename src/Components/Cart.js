import { useDispatch, useSelector } from "react-redux"
import { ItemsList } from "./ItemsList"//
import { Clearcart } from "../utils/Cartslice"

 export const Cart =()=>{
    const dispatch=useDispatch()
    const cartitems=useSelector((store)=>store.cart.items)
    const handleclearitems=()=>{
        dispatch(Clearcart())
        console.log(Clearcart())
    }
    return (
        <div className="text-center m-2"><h1>cart</h1>
        <div className="w-6/12 m-auto">
        <button className="m-2 p-2 bg-black rounded-lg text-white" onClick={handleclearitems}>Clearcart</button>
        {cartitems.length==0 && <h1>cart is empty please add the cart items</h1>}
        <h1 className="bg-gray-400"><ItemsList items={cartitems} fromcart={true}/></h1>
        </div>
        </div>
    )
 }