

// import {useState} from 'react'
// import AwashcounterApp from './Awash/AwashcounterApp';
// function App() {
//   const[counter,setCounter]=useState(0)
//   return (
//     <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
//       <AwashcounterApp/>
//       <h2>{counter}</h2>
//      <div style={{display:"flex",gap:"15px"}}>
//       <button onClick={()=>setCounter(counter+1)}>Addition</button>
//        <button onClick={()=>setCounter(counter-1)}>subtract</button>
//       </div>
//     </div>
//   );
// }

import {useSelector} from "react-redux";
import Button from "./Component/Button";
function App() {
  const count=useSelector((state)=> state.counter.value);
    
  return ( 
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <div style={{display:"flex",color:"orange",backgroundColor:"#031154",padding:"15px",flexDirection:"column",alignItems:"center"}}>
      <h1>Awash counter app</h1>
      </div>
      <h1>{count}</h1>
      <Button/>
    </div>
    
  )
} 

export default App;
