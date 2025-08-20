
// import './App.css';
// import Loginpage from './Pages/Loginpage';

// function App() {
//   return (
//     <div >
//       <h1 style={{color:"black",backgroundColor:"red",margin:"auto"}}>Zemen bank</h1>
//       <Loginpage/>
//     </div>
//   );
// }

// export default App;

import {useState} from 'react'
import './App.css';

export default function App() {
  const[countrys,setCountrys] = useState([]);
  const [searchCountryName, setSearchCountryName] = useState("");

  function getCountrys(){
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
    .then((res)=> res.json())
    .then((data) => setCountrys(data))

  }
  function search(name){
     fetch("https://restcountries.com/v3.1/name/" +name)
  .then((res)=> {
    if(res.status ===200)
      return res.json()
    else
      return[]
  })

  .then((data) => setCountrys(data))
  }
 
  return (
    <>
    <h1>country list</h1>
    <input placeholder="search" type="search" 
    value={searchCountryName} 
    onChange={(e) => setSearchCountryName(e.target.value)} />
    <button  onClick={() =>search(searchCountryName )}>search countries</button>
      <button  onClick={() =>getCountrys() }>Get countries</button>

    <div style={{display:"flex",gap:"15px",maxWidth:"100%",flexWrap:"wrap",padding:"10px"}}>
      {countrys.map((country) => (
        <div style={{width:"350",borderWidth:"2px",borderColor:"black",backgroundColor:"greenyellow",padding:"10px"}}>
    <img src={country.flags.png} alt={country.flags.alt} width="100%"/>
    <p>country common name:{country.name.common}</p>
    <p>country official name:{country.name.official}</p>
    </div>
        ))}
    </div>
    
    </>
    
  )
}
