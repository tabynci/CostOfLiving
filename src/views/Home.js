import React from "react";
import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import axios from "axios";

function Home(props){
    const location = useLocation();
    const [cities, setCities]=useState([])
    const [city, setCity] = useState();
    const [zoom] = useState(10);
    // eslint-disable-next-line
    const [map, setMap] = React.useState(null)

    const [currentPage, setCurrentPage] = useState(1);


    props.token();

    const getCities= async function() {        
        try{
            var data= await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/cities",{
            headers :{
                'X-RapidAPI-Key': 'f183a42a81mshceb2974bf064e57p1137d8jsna883237c0e88'
            }
        })
        setCities(data.data.cities)
        // console.log(data.data);
        }catch(e){
            console.log(e)
        }
    }

    const containerStyle = {
        width: '1690px',
        height: '700px'
      };

    const [center, setCenter]=useState({
        lat:53.3498053,
        lng: -6.2603097
      })

    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA1pgLxx1_ejr5w-T61ZOZA1eaYz7Hnhtc"
    })

    const onLoad = React.useCallback(function callback(map) {
        //const bounds = new window.google.maps.LatLngBounds(center);
        //map.fitBounds(bounds);
        map.setZoom(zoom)
        setMap(map)
    }, [zoom])
    
    const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    }, [])

    function setNewCity() {
      // console.log(location.state)
      setCity(location.state);

      if(city){
        cities.filter(citi => {
          if(citi.city_name.toUpperCase()===city.toUpperCase()){
            console.log('match: ' + citi.city_id)
            setCenter({
              lat: citi.lat,
              lng: citi.lng
            })
          }
          return citi
        });
      }
    //location.state = '';
      //console.log(center)
    }

    useEffect(()=>{
        getCities(); 
        setNewCity();
    });

    return isLoaded ? (
      <div className="borderStyle">
        
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </div>
         
      ) : <></>;
      
}

export default Home;