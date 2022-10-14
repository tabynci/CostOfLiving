import {useState, useEffect} from 'react'
import axios from 'axios'
import _ from 'lodash'

function Home(props){
    const [city,setCity]=useState([])
      const [city_name, setCityName] = useState('')
      const [country_name, setCountry] = useState('')
      const [country_id, setCountryID] = useState('')
      const [city_id, setCityID] = useState('')
      const [prices, setPrices]=useState([])
      const [item_name, setItemName] =useState('')
      const [lat, setLat]=useState('')
      const [lng,setLng]=useState('')
      const [measure, setPriceMax]=useState('')
        const [category_name, setCategory]=useState('')
        const [max, setMax] =useState('')
        const [min, setMin]=useState('')
        const [category_group, setCategoryGroup]=useState({})

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
        setCityName(data.city_name)
        setCountry(data.country_name)
        //setCategory(data.data.prices.category_name)
        
        console.log(data)
        console.log(prices)
        
        // console.log(_.groupBy(data.data.prices, 'category_name')[0])
            }catch(e){
            console.log(e)
        }
        }
         useEffect(()=>{
        getCitiesPrices();
        },[]);

        function handleSubmit(e){
           e.preventDefault()
        setCityName("")
        setCountry("")
        getCitiesPrices()
      
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
            <p>{price.item_name}</p>
            <p>{price.max}</p>
            <p>{price.min}</p>           
            </div>
        )
    };

     const itemprice = Object.keys(category_group).map((key, i) => 
        // console.log(category_group[key])
        
        <div>
        <h4><a href='#'>{key} {category_group[key].length}</a></h4>
            <div id={key+i}>
                {catprice(key)}
            </div>
        </div> 
    );

    //console.log(itemprice)

    // const obj= 
    // [
    //   {
    //       "good_id": 1,
    //       "item_name": "Price per square meter to Buy Apartment Outside of City Center",
    //       "category_id": 1,
    //       "category_name": "Buy Apartment",
    //       "min": 3095.79,
    //       "avg": 4037.82,
    //       "max": 5159.65,
    //       "usd": {
    //           "min": "3234.92",
    //           "avg": "4219.29",
    //           "max": "5391.54"
    //       },
    //       "measure": "money",
    //       "currency_code": "EUR"
    //   },
    //   {
    //       "good_id": 2,
    //       "item_name": "Price per square meter to Buy Apartment in City Center",
    //       "category_id": 1,
    //       "category_name": "Buy Apartment",
    //       "min": 4321.73,
    //       "avg": 5833.38,
    //       "max": 7687.89,
    //       "usd": {
    //           "min": "4515.96",
    //           "avg": "6095.55",
    //           "max": "8033.41"
    //       },
    //       "measure": "money",
    //       "currency_code": "EUR"
    //   }
    //  ]
    //  _.groupBy(obj, 'category_name')
 
    
    // const itemprice = prices.map((price, i) => 
  
    //     <div key={i}>
    //     <h4>{price.category_name}</h4>
    //      <h6>{price.item_name}</h6>
    //      <h6>{price.max}</h6>
    //      <h6>{price.min}</h6>
        
         
    //      </div>
    
    //  <li><h3>category : </h3><h4>{price.category_name}</h4> <h3>Item Name : </h3> <h4>{price.item_name}</h4><h3>Maximum Price : </h3><h4>{price.max} </h4><h3> Minimum Price : </h3> <h4>{price.min}</h4></li>
    // <div key={i}>
    //     <h4>{price.category_name}</h4>
    //     <h6>{price.item_name}</h6>
    //     <h6>{price.max}</h6>
    //     <h6>{price.min}</h6>
    // </div>
 
    
    // );
    
        
    
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
        </div>
           )
       }
      
  export default Home;