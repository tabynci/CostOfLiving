import React from "react";
import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import axios from "axios";

function Mymap(props){
    const [cities, setCities]=useState([])
    const [city, setCity] = useState();

    const getCities= async function() {        
        try{
            var data= await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/cities",{
            headers :{
                'X-RapidAPI-Key': 'f183a42a81mshceb2974bf064e57p1137d8jsna883237c0e88'
            }
            
        })
        console.log(data.data);
        }catch(e){
            console.log(e)
        }
    }

    const containerStyle = {
        width: '1000px',
        height: '700px'
      };

    const [map, setMap] = React.useState(null)

    const [center, setCenter]=useState({
        lat:53.3498053,
        lng: -6.2603097
      })

    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA1pgLxx1_ejr5w-T61ZOZA1eaYz7Hnhtc"
    })

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    }, [])

    function setCity() {
        city = useLocation().state;
    //     cities.filter(city => {
    //     if(city.city_name===useLocation().state){
    //       console.log('match: ' + city)
    //     //   setCenter({
    //     //     lat: city.lat,
    //     //     lng: city.lng
    //     //   })
    //     }
    //   });
    }

    // console.log(u)

    useEffect(()=>{
        getCities(); 
        setCity();
    },[]);

    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap> 
      ) : <></>;


    // return(
    //     <div>
    //         Here goes map
    //     </div>
    // );
}

export default Mymap;