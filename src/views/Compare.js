// https://react-bootstrap.github.io/components/dropdowns/
// https://react-bootstrap.github.io/components/table/
// https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0

import React, { useState} from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect } from "react";
import { result, set } from "lodash";
import { Pagination } from "react-bootstrap";
import ComparePost from "./ComparePost";
import PaginationCompare from "./PaginationCompare";
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
    const [loading, setLoading]=useState(false)
    const [currentPage, setCurrentPage]=useState(1);
    const [categoriesPerPage, SetCategoriesPerPage]=useState(10);
    const [prices, setPrices]=useState([])
    const [cityId1, setCityId1]=useState('')
    const [cityId2, setCityId2]=useState('')
    const [UserId, setUserId] =useState('')

    //https://softwareengineering.stackexchange.com/questions/433640/in-javascript-how-is-awaiting-the-result-of-an-async-different-than-sync-calls

    const getHost = function(cityname) {
        setHost(cityname)
        getPrices(cityname,'Ireland').then((value) => {
            console.log(value.data)
            setCity1Prices(value.data.prices)
        });
    }

    const getforeign = function(cityname){
        setforeign(cityname)
        getPrices(cityname,'India').then((value) => {
            console.log(value.data)
            setCity2Prices(value.data.prices)
        });
    }

    function handlechange1(e){
        e.preventDefault();
        getHost(e.target.value);
    }
    
    function handlechange2(e){
        e.preventDefault();
        getforeign(e.target.value)
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

    const getCategories = function(){
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
    function handleCompare(e){
        e.preventDefault();
        getCategories();
        // console.log(city1Prices);
        // console.log(city2Prices);
        
    }
    const handleSave= async function(){
        try{
            if(host !== "" && foreign !== ""){
                var data= await axios.post("http://localhost:3005/Compare/CompareSave",{
                    token:sessionStorage.getItem("token"),
                    hostcity:host,
                    foreigncity:foreign
                })
            }
            // if(data){
            //     console.log(data)
            //     // sessionStorage.setItem("token",data.data)
            //     setCityId1(data.data.cityId1)
            //     console.log(data.data.cityId1)
            //     setcity2(data.data.cityId2)
            //     props.token()
            // }
        }catch(error){
            console.log(error)
        }
    }

    const handleLoad= async function(){
        try{
            {
                console.log(sessionStorage.getItem("token"))
                await axios.post("http://localhost:3005/Compare/compareUser",{
                    token:sessionStorage.getItem("token")
                }).then(response => {
                    console.log('reponse' + response.data)
                if(response.data[0]) {
                    getHost(response.data[0].hostcity);
                    getforeign(response.data[0].foreigncity);
                    getCategories();
                }})
            } 
        }catch(error){
            console.log(error)
        }
    }
        useEffect(()=>{
        },[handleLoad])

// get currenet price
const indexOfLastPrice =currentPage*categoriesPerPage;
const indexOfFirstPrice=indexOfLastPrice-categoriesPerPage;
const currentCategory=categories.slice(indexOfFirstPrice, indexOfLastPrice);

// Change Page
const paginate =(pageNumber)=> setCurrentPage(pageNumber);

   if(sessionStorage.getItem("token")){
    return(
        <div>
            <div>
                <p className="compareHeading">Compare Data of two cities</p>
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
                <br></br>
                <button onClick={handleSave} class="btn btn-success">Save</button>
                <br></br>
                <button onClick={handleLoad} class="btn btn-success">Load</button>
                </div>
            {/* <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                             <th>Categories</th>
                            <th>Item</th>
                            <th>{host}</th>
                            <th>{foreign}</th>
                           
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
            </div> */}
            <ComparePost categories={currentCategory} loading={loading} city1Prices={city1Prices} city2Prices={city2Prices} host={host} foreign={foreign}/>
            <PaginationCompare categoriesPerPage={categoriesPerPage} totalPosts={categories.length} paginate={paginate}/>


        </div>
        )
   }
   
}
export default Compare;