//  https://www.pngitem.com/middle/ixTTomR_city-town-bilding-bild-landscape-background-nature-hong/

import {useState, useEffect} from 'react'
import axios from 'axios'
import _ from 'lodash'
import {Navigate} from 'react-router-dom'
import Cities from './Cities';
import React from 'react';
import m from '../images/m.jpg';
import u from '../images/u.jpg';
import Pagination from './Pagination';
import PricesPost from './PricesPost';

function Mainpage(props){

   
      const [city_name, setCityName] = useState('')
      const [country_name, setCountry] = useState('')
    //   const [country_id, setCountryID] = useState('')
      const [prices, setPrices]=useState([])
      const [item_name, setItemName] =useState('')
        const [max, setMax] =useState('')
        const [min, setMin]=useState('')
        const [category_group, setCategoryGroup]=useState({})
        const [category_name, setCategoryName] =useState('')
        const [error, setError]=useState('');
        const [loading, setLoading]=useState(false)
        const [currentPage, setCurrentPage]=useState(1);
        const [pricesPerPage, SetPricesPerPage]=useState(3);
        
      

      function handleSearchCity(e){ //when user enters value this function is called out
          e.preventDefault()
          setError('');
          setCityName(e.target.value)
      }
      function handleSearchCountry(e){ //when user enters value this function is called out
        e.preventDefault()
        setError('');
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
        setLoading(true);
        setPrices(data.data.prices)
        
        console.log(data.data.prices)
        setLoading(false);
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

        function handleSearch(e){
        e.preventDefault();
        console.log(city_name + country_name);
            if(city_name && country_name)
            {
        setError('');
        getCitiesPrices();
        setCityName('');
        setCountry('');
        
             }   
             else if(city_name=="" && country_name==""){
                setError('please enter all the fileds');
             }  
        setCategoryGroup(_.groupBy(prices, 'category_name'))
 };
    

// get currenet price
    const indexOfLastPrice =currentPage*pricesPerPage;
    const indexOfFirstPrice=indexOfLastPrice-pricesPerPage;
    const currentPrice=prices.slice(indexOfFirstPrice, indexOfLastPrice);

// Change Page
    const paginate =(pageNumber)=> setCurrentPage(pageNumber);

    // props.token()
    if(sessionStorage.getItem("token")){
      
        return(
            
            <div className='main'>
                <h1 className='MainPage-H'>Cost Of Living and Expenses</h1>
                <p className='Mainpage-input'> Cost of Living and Expenses is an international database.Information on seconds on :buying an apartment, Mortgage Costs, Transportaion, Salaries and Financing, Restaurants, Childcare</p><br></br>
                
                
            <div className='image-main'>
               <img src={m} width="500px"></img>
                </div>
                <div className='mainpage'>
                    <div className='Image-opacity'><img src={u} style={{width:"100em"}}></img></div>
                    <div className='move-text'>
                    <label className='Mainpage-input-red'> City Name</label><br/>
                    <input type="text" className='Mainpage-input' value={city_name} onChange={handleSearchCity} placeholder="Enter City name"></input><br/>
                    <label className='Mainpage-input-red'>Country Name</label><br/>
                    <input type="text"  className='Mainpage-input' value={country_name} onChange={handleSearchCountry} placeholder=" Enter Country Name"></input><br/><br/>
                    <button className='mainpage-input-button' name='search' onClick={handleSearch}>Search</button><br></br>
                    </div>
                    <h4 style={{color:'red'}}> {error} </h4>
                </div>
              
                    <div className='category'>                
                    {/* {itemprice} */}
                    <PricesPost prices ={currentPrice} loading={loading}/>
                    <Pagination pricesPerPage={pricesPerPage} totalPosts={prices.length} paginate={paginate}/>
                </div> 
       
            
            </div>
               )}else{
                <Navigate to="/" />
               }
        }
      
  export default Mainpage;