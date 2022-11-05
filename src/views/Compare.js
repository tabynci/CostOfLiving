// https://react-bootstrap.github.io/components/dropdowns/
// https://react-bootstrap.github.io/components/table/

import React, { useState,useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { set } from "lodash";
const cors = require("cors");
function Compare(){
    const [host, setHost] = useState('')
    const [foreign, setforeign] = useState('')
    const [city1Prices, setCity1Prices]=useState([])
    const [city2Prices, setCity2Prices]=useState([])
    const [categories, setCategories]=useState([])

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

        console.log(city1Prices.map((price) => {
            if(price.category_name!=="Salaries And Financing"){
            return {
                "category_name":price.category_name,
                "item_name":price.item_name
            }}
            }))
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
              
                <div><p className="text">Select City Name </p></div>

                <div>
                    <select className="dropdown" onChange={handlechange1}>
                <option value="Cork">Cork</option>
                <option value="Dublin">Dublin</option>
                <option value="Galway">Galway</option>
                    </select>
                    </div>
                    <div><p className="text">Select another city Name </p></div>
                    <div>
                    <select className="dropdown" onChange={handlechange2}>
                <option value="Delhi">Delhi</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
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
                        </tr>
                    </thead>
                    <tbody>
                    {
                        categories.map((category)=>{
                            if(category){
                            const city1 =city1Prices.filter((pr)=> { 
                                return pr.category_name==category.category_name && pr.item_name==category.item_name})[0].usd
                            const city2 =city2Prices.filter((pr)=> { 
                                return pr.category_name==category.category_name && pr.item_name==category.item_name})[0].usd
                        return (<tr> <td >{category.category_name}</td>
                                <td>{category.item_name}</td>
                            <td>Minimum:{city1?city1.min:0}<br></br>Maximun:{city1?city1.max:0}</td>
                            <td>Minimum:{city2?city2.min:0}<br></br>Maximun:{city2?city2.max:0}</td>
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