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
import AdminDashboard from './views/AdminDashboard';
import Users from './views/Users';
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useState('')
 

 

 
  
   

  const getLoggedIn=async function fetchData(){
    const main = "";
    if(main){
       var data = await axios.post("http://localhost:3005", {username:username, password:password})
       if(data.status === 200){
        setLoggedIn(true)
       } else {
        setLoggedIn(false)
    } 
   }
  }
  useEffect(() => {
    getLoggedIn();
  }, [])



  

  return (
    <div>
   <Router>
    <div>
      <Navbar />
      <Routes>
        {/* <Route path = "/" element ={<Home location={location}/>} />
        <Route path ="/Mainpage" element={<Mainpage loggedIn={loggedIn}/>} /> */}
         <Route path ="/Register" element={<Register loggedIn={loggedIn}/>} />
         <Route path ="/Login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
         <Route path ="/About" element={<About loggedIn={loggedIn}/>} />
         <Route path ="/Contact" element={<Contact loggedIn={loggedIn}/>} />
         <Route path ="/AdminDashboard" element={<AdminDashboard/>} />
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
