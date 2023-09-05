import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { Functionalcomponent, Headingcomponent } from "../Functionalcomponent";
import { Fakestoreapi } from "./Components/Fakestoreapi";
import { Food, Foodheader, Header, } from "./Components/Foodheader";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ErrMsg from "./Components/Error";
import { Body } from "./Components/Foodbody";
import {About }from "./Components/About";
import {Contact} from "./Components/Contact";
import { RestaurantMenu } from "./Components/RestaurantMenu";



const AppLayout = () =>{
   return(
    <div className="app">
    <Header/>
    <Outlet/>
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
     }
    ],
      errorElement:<ErrMsg/>
      },
      
    ]
    
)

const roots = ReactDOM.createRoot(document.getElementById("root"))
 roots.render(<RouterProvider router={appRouter}/>)
