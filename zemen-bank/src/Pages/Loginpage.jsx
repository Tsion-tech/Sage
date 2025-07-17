import { useState } from "react"

function Loginpage(){
const[userName,setUserName]=useState("Rahel")
const[Name,setUserName]
    return<div>
        <form>
            <label htmlFor="userName">UserName</label>
            <br/>
            <input
             type="text" 
             id="userName" 
             placeholder="Enter user name"
              name="user name" 
              required
            onChange={
                (e)=>{
                    setUserName(e.target.value)
                }
            }
            />
        </form>
        
    </div>
}
export default Loginpage