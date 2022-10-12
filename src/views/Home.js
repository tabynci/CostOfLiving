import {useState, useEffect} from 'react'
import axios from 'axios'

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
        // const [market, setMarket]=useState('')
        // const [apple, setApple]=useState('')
        // const [banana, setBanana]=useState('')
        // const [Childcare, setChildcare]=useState('')
      function handleSearchCity(e){ //when user enters value this function is called out
          e.preventDefault()
          setCityName(e.target.value)
      }
      function handleSearchCountry(e){ //when user enters value this function is called out
        e.preventDefault()
        setCountry(e.target.value)
       }
       
    
//       const getoption = async function(){
//       var data=await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/cities",{
  
//         headers: {
//               'X-RapidAPI-Key': 'f183a42a81mshceb2974bf064e57p1137d8jsna883237c0e88',
              
//             }
              
//        })
//   setCityID(data.data.cities[0].city_id)
//   setLat(data.data.cities[3].lat)
//   setLng(data.data.cities[4].lng)
//     // console.log(data)
    
//   };
  
    // useEffect(()=>{
    //   getoption();
    // },[]);
  

    const getCitiesPrices= async function() {
        var data= await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/prices",{
            headers :{
                'X-RapidAPI-Key': 'f183a42a81mshceb2974bf064e57p1137d8jsna883237c0e88'
            },
            params:{city_name:city_name, country_name:country_name}
        })
        setPrices(data.data.prices);
        setCityName(data.city_name)
        setCountry(data.country_name)
        setCategory(data.data.prices[2].category_name)
       
        console.log(data)
        console.log(prices)
    }
        useEffect(()=>{
        getCitiesPrices();
        },[]);

    async function handleSubmit(e){
      e.preventDefault()
      // await axios.post("http://localhost:8080", {city_name:city_name,country_name:country_name,country_id:country_id})
    //   await getoption()
      await getCitiesPrices()
      setCityName("")
      setCountry("")
      
    }
    const itemprice = prices.map((price) => 
    //  <li><h3>category : </h3><h4>{price.category_name}</h4> <h3>Item Name : </h3> <h4>{price.item_name}</h4><h3>Maximum Price : </h3><h4>{price.max} </h4><h3> Minimum Price : </h3> <h4>{price.min}</h4></li>
    <div>
        <h4>category {price.category_name}</h4>
        <h6>{price.item_name}</h6>
        <h6>{price.max}</h6>
        <h6>{price.min}</h6>
    </div>
    );
    return(
        <div>
          <div><p>Please serch city</p>
                  <input type="text" value={city_name} onChange={handleSearchCity} placeholder="search city"></input>
                  <input type="text" value={country_name} onChange={handleSearchCountry} placeholder="search country"></input>
                  <button type='text' name='button' onClick={handleSubmit}>button</button>
                 </div>
             
                
                 
                <ul>{itemprice}</ul>
                

               {/* <div>
                <h1>Term:{props.term}</h1>
                <h2>group:{props.Group}</h2>
                <h3>track_id:{props.track_id}</h3>
               </div> */}
                  
          </div>
           )
       }
      
  export default Home;