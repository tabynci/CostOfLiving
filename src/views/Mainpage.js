// https://www.pngitem.com/middle/ixTTomR_city-town-bilding-bild-landscape-background-nature-hong/

import {useState, useEffect} from 'react'
import axios from 'axios'
import _ from 'lodash'
import {Navigate} from 'react-router-dom'
import Cities from './Cities';
import React from 'react';
import city from '../images/city.jpeg';



function Mainpage(props){

   
      const [city_name, setCityName] = useState('')
      const [country_name, setCountry] = useState('')
      const [country_id, setCountryID] = useState('')
      const [prices, setPrices]=useState([])
      const [item_name, setItemName] =useState('')
        const [max, setMax] =useState('')
        const [min, setMin]=useState('')
        const [category_group, setCategoryGroup]=useState({})
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError]=useState('');
        

      function handleSearchCity(e){ //when user enters value this function is called out
          e.preventDefault()
          setCityName(e.target.value)
      }
      function handleSearchCountry(e){ //when user enters value this function is called out
        e.preventDefault()
        setCountry(e.target.value)
       }
    
    const getCitiesPrices= async function() {
       
       if(city_name && country_name){
        try{
            var data= await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/prices",{
            headers :{
                'X-RapidAPI-Key': 'f183a42a81mshceb2974bf064e57p1137d8jsna883237c0e88'
            },
            params:{city_name:city_name, country_name:country_name}
        })
       if(data.status==200){
        setPrices(data.data.prices)
       }else{
        console.log(data)
       }
         }catch(error){
            console.log(error)
        }
       }
      
        
        }
         useEffect(()=>{
        getCitiesPrices();
        },[prices]);

        function handleSubmit(e){
        e.preventDefault();
        console.log(city_name + country_name);
            if(city_name && country_name)
            {
        getCitiesPrices()
        setCityName('');
        setCountry('');

            }     
        setCategoryGroup(_.groupBy(prices, 'category_name'))

     };

    function catprice(category,categoryName){ 
        return  category_group[category].map((price, id) => {
            return(
            <span>
            <p>Item: {price.item_name}</p>
            <p>Maximum Price: {price.max}</p>
            <p>Minimum Price: {price.min}</p>  
            </span>)
        })
    };

    function showContent(e){
        e.preventDefault();
        const element = document.getElementById(e.target.name);
        element.style.display=="none" ? element.style.display="" : element.style.display="none"
    }

    const itemprice = Object.keys(category_group).map((category) => {
        // console.log(category_group[key])
        const categoryName = category.replaceAll(' ','');
        return(
        <div>
        <h4>{category} {category_group[category].length}</h4><button name={categoryName} onClick={showContent}>Show/Hide</button>
            <div id={categoryName}>
                {catprice(category,categoryName)}
            </div>
        </div> )
    }
    );

    
    props.token()
    if(localStorage.getItem("token")){
      
        return(
            
            <div className='main'>
                <div className='image-main'>
                <img src={city} height="300px" width="600px" ></img>
                </div>
                <div className='mainpage'>
                    <p  className='Mainpage-input'> Please enter a city and country name in the input box. It will display a useful information of the city.</p>
                    <label className='Mainpage-input-red'> City Name</label><br/>
                    <input type="text" className='Mainpage-input' value={city_name} onChange={handleSearchCity} placeholder="Enter City name"></input><br/>
                    <label className='Mainpage-input-red'>Country Name</label><br/>
                    <input type="text"  className='Mainpage-input' value={country_name} onChange={handleSearchCountry} placeholder=" Enter Country Name"></input><br/><br/>
                    <button className='mainpage-input-button' name='search' onClick={handleSubmit}>Search</button><br></br>
                </div>
                <div>                
                    {itemprice}
                </div> 
                <div>
                    <Cities  city_name={city_name} country={country_name}/>
                </div>
            </div>
               )}else{
                <Navigate to="/" />
               }
        }
      
  export default Mainpage;