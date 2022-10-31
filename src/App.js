import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import Mainpage from './views/Mainpage';
import Register from './views/Register';
import About from './views/About';
import Login from './views/Login';

import Logout from './views/Logout'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './views/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Users from './views/Users';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useState('')
  const [admin, setAdmin]=useState('n')

  return (
    <div>
   <Router>
    <div>
      
      <Navbar loggedIn={loggedIn} admin={admin}/>
      <Routes>
        <Route path = "/" element ={<Home location={location}/>} />
        <Route path ="/Mainpage" element={<Mainpage loggedIn={loggedIn}/>} />
         <Route path ="/Register" element={<Register loggedIn={loggedIn}/>} />
         <Route path ="/Login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} admin={admin} setAdmin={setAdmin} />} />
         <Route path ="/Logout" element={<Logout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
         <Route path ="/About" element={<About loggedIn={loggedIn}/>} />
         <Route path ="/Contact" element={<Contact loggedIn={loggedIn}/>} />
         <Route path ="/Dashboard" element={<Dashboard loggedIn={loggedIn} admin={admin} />} />
         {/* <Route path ="/Users" element={<Users/>} /> */}
         {/* <Route className='home' path='Logout' element={<Logout setLoggedIn={setLoggedIn}/>} /> */}
       </Routes>
       <Footer/>
    </div>
   </Router>
    </div>
  );
}

export default App;
