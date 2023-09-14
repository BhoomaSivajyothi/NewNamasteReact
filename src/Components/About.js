import React from "react"
import { Userclass } from "./Userclass"

export class About extends React.Component{
    constructor(props){
        super(props)
        console.log(" parent-constructor")
    }
    componentDidMount(){
        console.log(" parent component Did mount")
    }
    render() 
    {
        console.log(" parent-rednedr")
      return(
         <div className="m-4">
           <h1>this is about us page</h1>
            <Userclass name={"sivajyothi"} location={"banglore"} email={"@jyothikesava"}/>   
         </div>
        )  
          
    }
   
}

