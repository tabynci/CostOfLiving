import {useState, useEffect} from 'react'
import axios from 'axios'
import _ from 'lodash'
import {Navigate} from 'react-router-dom'
import Cities from './Cities';
const cors = require("cors");

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
       
      
        try{
            var data= await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/prices",{
            headers :{
                'X-RapidAPI-Key': 'f183a42a81mshceb2974bf064e57p1137d8jsna883237c0e88'
            },
            params:{city_name:city_name, country_name:country_name}
        })
       
         setPrices(data.data.prices)
         
        // console.log(prices)
        //setCityName(data.city_name)
        
        //setCountry(data.country_name)
        // console.log(data.country_name)
        //setCategory(data.data.prices.category_name)
        
        // console.log(data)
        // console.log(prices)
        
        // console.log(_.groupBy(data.data.prices, 'category_name')[0])
            }catch(error){
            console.log(error)
        }
        }
         useEffect(()=>{
        getCitiesPrices();
        },[]);

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
    //  for(let key of Object.keys(category_group)){
    //     console.log(Object.keys(_.groupBy(prices, 'category_name')))
    //  }
    //   console.log(Object.keys(_.groupBy(prices, 'category_name')))

        // for(let key of Object.keys(category_group)){
        //     console.log(key);
        //     for(let value of category_group[key]){
        //         console.log(value.item_name);
        //     }
        // }

     };

     function catprice(key){ 
        return  category_group[key].map((price) => 
            
          <div>
            <p>Item: {price.item_name}</p>
            <p>Maximum Price: {price.max}</p>
            <p>Minimum Price: {price.min}</p>  
          </div>
                    )
    };

     const itemprice = Object.keys(category_group).map((key, i) => 
        // console.log(category_group[key])
        
        <div>
        <h4><a  href='#' >{key} {category_group[key].length}</a></h4>
            <div>
                {catprice(key)}
            </div>
        </div> 
    );

    // const getUser=async function(){
    //     const main = "";
    //     var data = await axios.post("http://localhost:3005/login",{username:username, password:password })
    //     setUsername(data.data.username)
    //     setPassword(data.data.password)
    // } 
    // useEffect(() =>{
    //     getUser();
    // })
    

    if(props.loggedIn){
        
        return(
            <div>
                    <div>
                    <p>Please serch city</p>
                    <input type="text" value={city_name} onChange={handleSearchCity} placeholder="search city"></input>
                    <input type="text" value={country_name} onChange={handleSearchCountry} placeholder="search country"></input>
                    <button type='text' name='button' onClick={handleSubmit}>button</button>
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