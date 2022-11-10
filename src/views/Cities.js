import {useState, useEffect} from 'react'
import axios from 'axios'
function Cities(props){
    const [city_name, setCityName]=useState('')
    const [country_name, setCountry]=useState('')
    const [lat, setLat]=useState('')
    const [lng, setlng]=useState('')
    const [cities, setCities]=useState([])
    const [city, setCity]=('')
    const [city_id, setCityId]=useState('')
    const filtered ="";

    const getCities= async function() {
       
      
        try{
            var data= await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/cities",{
            headers :{
                'X-RapidAPI-Key': 'f183a42a81mshceb2974bf064e57p1137d8jsna883237c0e88'
            }
        })
        // console.log(data)
        setCityId(data.data.cities.city_id)
        setCityName(data.data.cities.city_name)
        // console.log(data.data.cities)
        setCountry(data.data.cities.country_name)
        setLat(data.data.cities)
        // console.log(data.data.cities)
        setlng(data.data.cities)
        setCities(data.data.cities)
        //setCategory(data.data.prices.category_name)
        
        // console.log(data)
        
        }catch(e){
            console.log(e)
        }

        const filtered = cities.filter(city => {
            // console.log(city)
            if(city.country_name === 'Ireland' && city.city_name==='Dublin')
                return city 
          });
          console.log(filtered);
        }
         useEffect(()=>{
        getCities();
        // console.log(getCities)
        },[]);



        

       

    return(
        <div>
           
           <div>
            {
                // filtered.map(obj=>{
                //     return(
                //         <div key={obj.id}>
                //         <h2>id: {obj.id}</h2>
                //         <h2>country: {obj.country}</h2>
                //          </div>
                //     )
                // })
            }

           {/* {
            cities &&(
                <div>
                    <h2>city_name:{city_name}</h2>
                    <h2>country_name:{country_name}</h2>
                    </div>
            )
           }
           */}
           </div>
        </div>
    )
}
export default Cities;