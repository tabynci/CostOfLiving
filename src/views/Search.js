import {useState} from 'react'
import {Link} from 'react-router-dom'
function Search(props){
    
    const [city_name, setCityName]=useState('')
    function handleCityInput(e){
        e.preventDefault()
        setCityName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        setCityName("")
        console.log()
    }

    return(
        <div>
            <form className="d-flex" role="search">
          <input value={city_name} onChange={handleCityInput} className="form-control me-2 item-font" type="search" placeholder="Search" aria-label="Search"></input>
          {/* <button className="btn btn-outline-success text-light item-font"  type="submit">Search</button> */}
          <Link to="/" state={city_name}>Go to cart</Link>
        </form>
       
        </div>
    )
        
    
}
export default Search;