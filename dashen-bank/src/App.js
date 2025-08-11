// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "./Page/Home";
// import About from "./Page/About";
// import NotFound from "./Page/NotFound";
// import Contact from "./Page/Contact";
// import Category from "./Page/Category";
// import Electronics from "./Page/Electronics";
// import Layout from "./Page/Layout";
// import UserProfile from "./Page/UserProfile";

import Button from"./components/Button"
function App() {
  const count=useSelector((state)=> state.counter.value);
    
  return (
    <div style={{display:"flex",flexDirection:"column","alignItems:center"}}>
      <h1>Awash counter app</h1>
      <h1>{counter}</h1>
      <Button/>
    </div>
    // <div >
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Layout />} >

    //         <Route index element={<Home />} />
    //         <Route path="about" element={<About />} />
    //         <Route path="Contact" element={<Contact />} />
    //         <Route path=":Id" element={<UserProfile />} />

    //         <Route path="Category" >
    //           <Route index element={<Category />} />
    //           <Route path="Electronics" element={<Electronics />} />

    //         </Route>

    //       </Route>
    //       <Route path="*" element={<NotFound />} />

    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
