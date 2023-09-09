import React from "react";
import "./food.css"
 export class Userclass extends React.Component {
    constructor(props){
      super(props);
      this.state={
        userinfo:{
            name:"sj",
            loaction:"banglore",
            email:"@hkkk"
        }
       
      }
    //  console.log(this.props.name +" chaild constructor") 
    }
    async componentDidMount(){
        const fetchdata= await fetch("https://api.github.com/user");
        const data= await fetchdata.json();
        this.setState({
            userinfo:data

        }
           
        )
    }
    render() { 
        // console.log( this.props.name + "chaild render")

        const{name,location,email}=this.state
        
        
       return(
        <div className="user">
            <p>This Class component</p>
            <h3>name:{name}</h3>
            <h3>location:{location}</h3>
            <h3>email:{email}</h3>
        </div>
        
       )
    }
}