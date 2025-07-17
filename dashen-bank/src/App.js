import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Page/Home";
import About from "./Page/About";
import NotFound from "./Page/NotFound";
import Contact from "./Page/Contact";
import Category from "./Page/Category";
import Electronics from "./Page/Electronics";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" >

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="Contact" element={<Contact />} />

            <Route path="Category" >
              <Route index element={<Category />} />
              <Route path="Electronics" element={<Electronics />}/>
     </Route>
          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
