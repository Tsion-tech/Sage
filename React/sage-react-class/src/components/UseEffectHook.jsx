import { useEffect, useState } from "react";

function UseEffectHook(){
    const[counter,setcounter]=useState(0)
    useEffect(()=>{
        setTimeout(()=>setcounter(counter+1),1000)
    },[])
    return(<>
    <p>UseEfeectHook</p>
    <p style={{fontSize:"40px",padding:"10px"}}>{counter}</p>
    
    </>)
}
export default UseEffectHook