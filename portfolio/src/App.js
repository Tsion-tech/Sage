 import React from "react";
 import Navbar from './Components/NavBar/NavBar'
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";

import Contact from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer"
 const App = () => {
     return(
         <div>
             <Navbar/>
             <Hero/>
             <About/>
             <Skills/>
             
             <Contact/>
             <Footer/>
         </div>
     )
  }
 export default App