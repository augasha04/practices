import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (

     <div>

    <BrowserRouter>
    <Navbar />
    <Routes>


    <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/About' element={<About/>}></Route>

      

    </Routes>
    </BrowserRouter>


     </div>

   

      
   




      
    
  );
}

export default App;
