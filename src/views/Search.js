// import {useState} from 'react'
// import {Link} from 'react-router-dom'
// function Search(props){
    
//     const [city_name, setCityName]=useState('')
//     function handleCityInput(e){
//         e.preventDefault()
//         setCityName(e.target.value)
//     }
//     function handleSubmit(e){
//         e.preventDefault()
//         setCityName("")
//         console.log()
//     }

//     return(
//         <div>
//             <form className="d-flex" role="search">
//           <input value={city_name} onChange={handleCityInput} className="form-control me-2 item-font" type="search" placeholder="Search" aria-label="Search"></input>
//           {/* <button className="btn btn-outline-success text-light item-font"  type="submit">Search</button> */}
//           <Link to="/" state={city_name}>Go to cart</Link>
//         </form>
       
//         </div>
//     )
        
    
// }
// export default Search;


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
          <input value={city_name} onChange={handleCityInput} className="form-control me-2 item-font" type="search" placeholder="Search" aria-label="Search"></input>
          {/* <button className="btn btn-outline-success text-light item-font"  type="submit" onClick={handleSubmit}>Search</button> */}
          <Link to="/" state={city_name}>Go to cart</Link>
        </form>
       
        </div>
    )
        
    
}
export default Search