
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AddTask from './pages/AddTask';
import About from './pages/About';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
          <Route index element={<Home/>}/>
          <Route path="AddTask"element={<AddTask/>}/>
          <Route path="About"element={<About/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
