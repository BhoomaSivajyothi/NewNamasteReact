import React from "react"
import { Userclass } from "./Userclass"
import { Usercontex } from "../utils/Usercontex"

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
            <div className="m-2">
            <h1>This is logedin</h1>
            <Usercontex.Consumer>
            {({logedin})=><h1>{logedin}</h1>}
           </Usercontex.Consumer>
            </div>
            <div className="m-2">
            <h1>this is about us page</h1>
            <Userclass name={"sivajyothi"} location={"banglore"} email={"@jyothikesava"}/>
            </div>   
         </div>

        )  
          
    }
   
}

