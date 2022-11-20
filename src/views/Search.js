
import {useState, useEffect} from 'react'
import {Link, Navigate, useLocation} from 'react-router-dom'
import React from 'react'
import axios from 'axios'

function Search(){
    
    const [city_name, setCityName]=useState('')

    function handleCityInput(e){
        e.preventDefault()
        
        setCityName(e.target.value) 
            
    }   

    return(
        <div>
            <form className="d-flex" role="search">
          <input value={city_name} onChange={handleCityInput} className="form-control me-2 item-font" type="search" placeholder="Enter city name" aria-label="Search"></input>
          <Link to="/" state={city_name}>Search City</Link>
        </form>
       
        </div>
    )
        
    
}
export default Search;