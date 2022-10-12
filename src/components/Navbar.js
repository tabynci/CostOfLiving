import React from "react";
import logo from '../images/logo.jpg'
function Navbar() {
    return (
    <div className="container-fluid fluid-padding">
    <nav className="navbar navbar-expand-lg bg">
    <div className="container-fluid div-width shawdow">
      <a className="navbar-brand" href="#"><img src={logo} height="80px" width="120px" ></img></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse div-padding " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
          <li className="nav-item">
            <a className="nav-link active text-light item-font" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light item-font" aria-current="page" href="/About">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light item-font" aria-current="page" href="/Contact">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light item-font " aria-current="page" href="/Register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light item-font " aria-current="page" href="/Login">Login</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link text-light item-font " href="#">Link</a>
          </li>
          <li className="nav-item   dropdown">
            <a className="nav-link  text-light item-font  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
        <form className="d-flex" role="search">
          <input className="form-control me-2 item-font" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success text-light item-font" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
      </div>
    );
  }

  export default Navbar;