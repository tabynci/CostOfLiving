import React from "react";
import logo from '../images/logo.jpg'
import style from '../Styling/style.css'
import Search from "../views/Search";
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
        <div className="container-fluid fluid-padding height">
        <nav className="navbar navbar-expand-lg bg height">
        <div className="container-fluid div-width shawdow">
          <a className="navbar-brand" href="#"><img src={logo} height="80px" width="120px" ></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse div-padding" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active item-font" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active item-font" aria-current="page" href="/Logout">Logout</a>
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
      <div className="container-fluid fluid-padding height">
      <nav className="navbar navbar-expand-lg bg height">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} height="80px" width="120px" ></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse div-padding" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light item-font" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light item-font" aria-current="page" href="/Logout">Logout</a>
            </li>
            </ul>
          
        </div>
      </div>
    </nav>
        </div>)
  }
  else {
    return (
          <div className="container-fluid fluid-padding height">
        <nav className="navbar navbar-expand-lg bg height">
        <div className="container-fluid div-width shawdow">
          <a className="navbar-brand" href="#"><img src={logo} height="50px" width="120px" ></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light item-font" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light item-font" aria-current="page" href="/Hotel">Hotel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light item-font" aria-current="page" href="/Register">Register</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link active text-light item-font" aria-current="page" href="/Login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light item-font" aria-current="page" href="/Logout">Logout</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light item-font" aria-current="page" href="/Dashboard">Dashbaord</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light item-font" aria-current="page" href="/Users">Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item item-font" href="#">Action</a></li>
                  <li><a className="dropdown-item item-font" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider item-font"></hr></li>
                  <li><a className="dropdown-item item-font" href="#">Something else here</a></li>
                </ul>
              </li>
              
            </ul>

            <Search />
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2 item-font" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success text-light item-font" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
          </div>
        );
  }
    
  }

  export default Navbar;