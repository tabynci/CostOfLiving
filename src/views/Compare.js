// https://react-bootstrap.github.io/components/dropdowns/
// https://react-bootstrap.github.io/components/table/
// https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0

import React, { useState} from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect } from "react";
import { result } from "lodash";
// import { set } from "lodash";
// import { propTypes } from "react-bootstrap/esm/Image";

function Compare(props){
    const [host, setHost] = useState('')
    const [foreign, setforeign] = useState('')
    const [city1Prices, setCity1Prices]=useState([])
    const [city2Prices, setCity2Prices]=useState([])
    const [categories, setCategories]=useState([])
    const [country_name, setCountry_name] =useState([])
    const [city_name, setCity_name]=useState([])
    const [city1, setcity1] = useState("⬇️ Select a city 1 ⬇️")
    const [city2, setcity2] = useState("⬇️ Select a city 2 ⬇️")
    const [city1Array, setCity1Array] =useState([])
    const [city2Array, setCity2Array] =useState([])
    props.token();

    //https://softwareengineering.stackexchange.com/questions/433640/in-javascript-how-is-awaiting-the-result-of-an-async-different-than-sync-calls

    function handlechange1(e){
        e.preventDefault();
        setHost(e.target.value)
        getPrices(e.target.value,'Ireland').then((value) => {
            // console.log(value.data)
            setCity1Prices(value.data.prices)
        });
    }
    
    function handlechange2(e){
        e.preventDefault();
        setforeign(e.target.value)
        getPrices(e.target.value,'India').then((value) => {
            // console.log(value.data)
            setCity2Prices(value.data.prices)
        });
    }

    const Citydropdown= async function city1Section(){
        try{
            var data = await axios.get("http://localhost:3005/CompareCities")
            // console.log(data)
            setCity1Array(data.data.map((x)=>
                {
                    return {
                    label:x.city_name, value:x.city_name
                    }
                }
            ))
              
            }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        // console.log("Citydropdown")
        Citydropdown();
        // console.log(city1)
    },[""])


    const AnotherCitydropdown =async function city2Sction(){
        try{
            var data= await axios.get("http://localhost:3005/CompareAnotherCity")

            // console.log(data)
            setCity2Array(data.data.map(y=>{
                return {
                    label:y.city_name, value:y.city_name
                }
            }))
        }catch(error){
            console.log(error)
        }
    }


    
    useEffect(()=>{
        // console.log("AnotherCitydropdown")
        AnotherCitydropdown();
        // console.log(city2)
    },[""])




    const getPrices =  async function(city_name,country_name){
        try{
            if(city_name && country_name){
                const response=await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/prices",{
                headers:{
                    'X-RapidAPI-Key': 'f183a42a81mshceb2974bf064e57p1137d8jsna883237c0e88'
                },
                params:{city_name:city_name, country_name:country_name}
                })
                return {
                    data:response.data
                }
            }
        }catch(error){
            console.log(error)
        }
    }

    function handleCompare(e){
        e.preventDefault();

        console.log(city1Prices);
        console.log(city2Prices);


        // console.log(city1Prices.map((price) => {
        //     if(price.category_name!=="Salaries And Financing" && price.category_name!=="Restaurants"){
        //     return {
        //         "category_name":price.category_name,
        //         "item_name":price.item_name
        //     }}
        //     }))

       
           
        setCategories(
            city1Prices.map((price) => {
                if(price.category_name!=="Salaries And Financing"){
                    return {
                        "category_name":price.category_name,
                        "item_name":price.item_name
                    }}
                })
        )
    }


   
    return(
        <div>
            <div>
                <p className="compareHeading">Compare two cities Data</p>
            </div>
    
            <div className="compare">
              
                <div><p className="text">City Name:   </p></div>

                <div>
                    <select className="dropdown" onChange={handlechange1}>
                   
               
                 <option value="⬇️ Select a city 1 ⬇️"> -- Select a city 1-- </option>
                 {city1Array.map((city1)=><option value={city1.value}>{city1.label}</option>)}
                    </select>
                    </div>
                    <div><p className="text">Another city Name:  </p></div>
                    <div>
                        
                    <select className="dropdown" onChange={handlechange2}>
              
                <option value="⬇️ Select a city 2 ⬇️"> -- Select a city 2 -- </option>
                {city2Array.map((city2)=><option value={city2.value}>{city2.label}</option>)}
                    </select>
                    </div>
               
            </div>
            <div className="buttonCompare">
                <button type="button" onClick={handleCompare} class="btn btn-success">Compare</button>
                
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Categories</th>
                            <th>Item</th>
                            <th>{host}</th>
                            <th>{foreign}</th>
                            {/* <th>{city1}</th>
                            <th>{city2}</th> */}
                        </tr>
                    </thead>
                    <tbody>

                      
                    {
                        categories.map((category)=>{
                            if(category){
                            const price1 = city1Prices.filter((pr)=> { 
                                    return pr.category_name==category.category_name && pr.item_name==category.item_name})[0]
                            const city1P =price1? price1.usd: undefined;

                            const price2 = city2Prices.filter((pr)=> { 
                                return pr.category_name==category.category_name && pr.item_name==category.item_name})[0]
                            const city2P =price2? price2.usd: undefined
                            
                        return (<tr> <td >{category.category_name}</td>
                                <td>{category.item_name}</td>
                            <td>Minimum: <span>&#36;</span>{city1P?city1P.min:0}<br></br>Maximun: <span>&#36;</span>{city1P?city1P.max:0}</td>
                            <td>Minimum: <span>&#36;</span>{city2P?city2P.min:0}<br></br>Maximun: <span>&#36;</span>{city2P?city2P.max:0}</td>
                        </tr>);
                        }})
                    }
                    </tbody>
                </Table>
            </div>
        </div>
        )
}
export default Compare;