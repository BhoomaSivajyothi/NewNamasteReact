import { Input } from "postcss"

export const Contact=()=>{
    return(
        <div className="m-4"> 
            <h1>this contact us page</h1>
            <form>
                <input type="text" className="border-black border-2 p-1 m-1"placeholder="username"/>
                <input type="text" className="border-black border-2 p-1 m-1"placeholder="psword"/>
                <button className="p-1 m-1 bg-black text-white">submit</button>
            </form> 
        </div>
    )
}