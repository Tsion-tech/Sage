
import Button from "./components/Button"
import"./App.css"

import{useState} from "react";
import LoginAndLogout from "./components/Conditional/LoginAndLogout";
import ReactList from "./components/ReactList";
function App(){
  const [counter, setCounter]= useState(0)
  return <div>
    <h1>First component</h1>
    <Button text="Login"/>
    <br/><br/>
    <Button text="Register"/>
    <br/><br/>
    <button onClick={()=>setCounter(counter+1)}>Add</button>
      <h1 style={{display:'inline',margin:'0 10px'}}>{counter}</h1>
      <button onClick={()=>setCounter(counter-1)}>Subtract</button>
      <br/><br/>
        <LoginAndLogout/>
        <ReactList/>
    </div>
    
 
}
export default App
