import React, { Children, Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Functionalcomponent, Headingcomponent } from "../Functionalcomponent";
import { Fakestoreapi } from "./Components/Fakestoreapi";
import { Food, Foodheader, Header, } from "./Components/Foodheader";
import { createBrowserRouter,RouterProvider,Outlet, useActionData } from "react-router-dom";
import ErrMsg from "./Components/Error";
import { Body } from "./Components/Foodbody";
import {About }from "./Components/About";
import {Contact} from "./Components/Contact";
import { RestaurantMenu } from "./Components/RestaurantMenu";
import React,{ lazy, Suspense} from "react";
import { Usercontex } from "./utils/Usercontex";
import { AppStore } from "./utils/Appstore";
import { Provider } from "react-redux";
import { Cart } from "./Components/Cart";
const Grocery = lazy(()=> import ("./Components/Grocery"))

const AppLayout = () =>{
  const [Username,setUsername]=useState()
useEffect(()=>{
   const data={
    name:"Siva jyothi"
  }
  setUsername(data.name)
},[])

   return(
    <div className="app">
    <Provider store={AppStore}>
    <Usercontex.Provider value={{logedin: Username ,setUsername}}>
      <Header/>
       <Outlet/>
    </Usercontex.Provider>
    </Provider>
   
    </div>
    
   );  
};

const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
      path:"/",
      element:<Body/>,
        },
        {
        path:"/About",
        element:<About/>
      },

      {
      path:"/Contact",
      element:<Contact/>,
      },
     {
       path:"/Restaurant/:resid",
      element:<RestaurantMenu/>,
     },
     {
      path:"/Grocery",
      element:<Suspense fallback={<h1>hhj</h1>}><Grocery/></Suspense>
    },
    {
      path:"/Cart",
      element:<Cart/>
    }
    ],
      errorElement:<ErrMsg/>
      },
      
    ]
    
)

const roots = ReactDOM.createRoot(document.getElementById("root"))
 roots.render(<RouterProvider router={appRouter}/>)
