import React from "react";
import ReactDOM from "react-dom/client";
//const Tittle= function ()
//{
   // return (
    //<h1>this normal javascript function we use instilized like this react function
  //</h1>)

  // }

let AnotherComponent = ()=>(
    <div><h1 id="jyo"> this anthor component and arrow function</h1></div>
)
let title = <h1>this is jsx element</h1>
const number=2000;
 export const  Functionalcomponent = () =>{
    return(<div>
        {number},
        {1000},
        {title},
        <AnotherComponent/>,
        <h1 className="heading">Nameste React functional component</h1>
    </div>)}
 