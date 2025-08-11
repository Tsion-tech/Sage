

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

import Button from"./components/Button"
import { useSelector } from "react-redux";

function App() {
  const count=useSelector((state)=> state.counter.value);
    
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>Awash counter app</h1>
      <h1>{count}</h1>
      <Button/>
    </div>
  )
}
export default App;
