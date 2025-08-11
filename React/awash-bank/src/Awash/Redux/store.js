// import Button from"./components/Button"
// function App() {
//   const count=useSelector((state)=> state.counter.value);
    
//   return (
//     <div style={{display:"flex",flexDirection:"column","alignItems:center"}}>
//       <h1>Awash counter app</h1>
//       <h1>{counter}</h1>
//       <Button/>
//     </div>
//   )
// }
import{configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"

export const store=configureStore({

    reducer:{
        counter: counterReducer
    }
})
