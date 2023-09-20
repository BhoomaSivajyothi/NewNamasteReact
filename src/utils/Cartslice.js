import { createSlice } from "@reduxjs/toolkit"

  const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:( state ,action)=>{
            state.items.push(action.payload)
        
        },
        RemoveItems: (state,action)=>{
            const deleteitem=state?.items?.filter((cartitem)=>cartitem.card.info.id !== action.payload.card.info.id)
            console.log(deleteitem)
            state.items=deleteitem
            // const deleteditemindex=state?.items?.findIndex(deleteitem)
            // console.log(deleteditemindex)
            // state.items.splice(deleteditemindex,1)
            
        },
        Clearcart: (state)=>{
            state.items.length=0;
        }
    }

})
export const {addItem,RemoveItems,Clearcart} = CartSlice.actions
export default CartSlice.reducer