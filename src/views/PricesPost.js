import React from "react";
import _ from 'lodash'
 const PricesPost =({prices,loading })=>{

    var catgroup=_.groupBy(prices, 'category_name');
    console.log(catgroup)
if(loading){
return <h2>loading..</h2>
}
return (

Object.keys(catgroup).map((catgory) => (
    // console.log(catgory);

    <ul className="list-group mb-4">
<span>{catgory}</span>
    {prices.map(price=>{
        if(price.category_name===catgory)
        return(<li key={price.id} className="list-group-item">
        <span> Item Name:</span><p id="light"> {price.item_name}</p>
        <span> Max: </span><p className="light">{price.max}</p> 
        <span>Min:<p className="light"> {price.min}</p></span> 
        </li>)
    })}
</ul>

)));
 }
 export default PricesPost;