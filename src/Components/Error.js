import { useRouteError } from "react-router-dom"
const ErrMsg= ()=>{
    const error= useRouteError()
    console.log(error)
    return (
        <div>
            <h1>OPPS!!!</h1>
            <h2> something wentwrong !!!!!!!! </h2>
            <h3>{error.status}:{error.statusText}</h3>
           
        </div>
       
    )
}
console.log(ErrMsg)


export  default ErrMsg
