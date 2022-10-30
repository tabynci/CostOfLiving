import {useState, useEffect} from 'react'
import axios from 'axios'
import _ from 'lodash'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react'
import {useLocation, Link} from 'react-router-dom'
const containerStyle = {
    width: '1000px',
    height: '700px'
  };
  


// const center = {
//     lat:53.3498053,
//     lng: -6.2603097
//   };
 //  googlemap https://www.youtube.com/watch?v=xD1p0Wn67xE
function Home(props){
  const [city_name, setCityName]=useState('')
  const [country_name, setCountry]=useState('')
  const [lat, setLat]=useState('')
  const [lng, setlng]=useState('')
  const [cities, setCities]=useState([])
  //const [city, setCity]=useState('')
  const [city_id, setCityId]=useState('')
  const filtered ="";

  const [center, setCenter]=useState({
    lat:53.3498053,
    lng: -6.2603097
  })

  const city = props.location//useLocation().state 
  //setCity(useLocation().state)
  console.log("entered city " + city)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA1pgLxx1_ejr5w-T61ZOZA1eaYz7Hnhtc"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

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
}



useEffect(()=>{
    getCities();  
},[]);

// useEffect(() => {
//   filteredCity();
// },[])

// function filteredCity() {
  cities.filter(city => {
  if(city.city_name===city){
    console.log('match: ' + city)
    setCenter({
      lat: city.lat,
      lng: city.lng
    })
  }
});
// }


// console.log(center);

useEffect(() => {
  console.log("Cente changed: " + center);
}, [])
      
return isLoaded ? (
  <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={5}
    onLoad={onLoad}
    onUnmount={onUnmount}
  >
    { /* Child components, such as markers, info windows, etc. */ }
    <></>
  </GoogleMap> 
) : <></>;
       

}
      
export default Home;