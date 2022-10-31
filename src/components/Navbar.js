import React from "react";
import style from '../Styling/style.css'
import Search from '../views/Search.js'
import {useState, useEffect} from 'react'
function Navbar(props) {
 console.log(props)
  const [loggedIn, setLoggedIn] = useState(false)
  const [admin, setAdmin] =useState('n')
  useEffect(function(){
      if(props.loggedIn){
          setLoggedIn(true)
          
      } else{
          setLoggedIn(false)
          setAdmin('n')
      }
  }, [props.loggedIn])

   
   if(props.loggedIn && admin=='n'){

   console.log(loggedIn);
    return (
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Logout">Logout</a>
              </li>
              
            </ul>
            <Search />
          </div>
        </div>
      </nav>
          </div>
        );

   
  }
  else if(!props.loggedIn && admin=='y'){
    console.log(admin=="y");
   
    return(
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Logout">Logout</a>
            </li>
            
            
            
          </ul>
          
        </div>
      </div>
    </nav>
        </div>)
  }
  else {
    return (
          <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Hotel">Hotel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Register">Register</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Logout">Logout</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Dashboard">Dashbaord</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Users">Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
          </div>
        );
  }
    
  }

  export default Navbar;