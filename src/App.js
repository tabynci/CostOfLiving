import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Register from './views/Register';
import About from './views/About';
import Login from './views/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './views/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
   <Router>
    <div>
      <Navbar />
      <Routes>
        {/* <Route path ="/" element={<Home/>} /> */}
         <Route path ="/Register" element={<Register/>} />
         <Route path ="/Login" element={<Login/>} />
         <Route path ="/About" element={<About/>} />
         <Route path ="/Contact" element={<Contact/>} />
       </Routes>
       <Footer/>
    </div>
   </Router>
    </div>
  );
}

export default App;
