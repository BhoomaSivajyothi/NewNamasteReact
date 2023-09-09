import { useState,useEffect } from "react"
import { MENU_URL } from "./Foodcontants"
export const useRestaurantMenu =(resid)=>{
const [resInfo,setResInfo]=useState(null)
useEffect(()=>{fetchData()},[])
const fetchData = async () =>{
const data= await fetch(MENU_URL+resid)
const jsonData= await data.json()
console.log(jsonData)
setResInfo(jsonData)
} 
return resInfo
}