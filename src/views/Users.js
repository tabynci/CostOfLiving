import React, { useEffect, useState } from "react";
import axios from 'axios'

function Users(){


const [err, setErr]=useState('not connected');

const [result, setResult]=useState('')
const getAllUsers = async function(){
   
    try {
        var data = await axios.get("http://localhost:3005/users")
        console.log(data);
        setResult(data.data.result)
      
        }catch(err){
        console.error(err);
    }
}
useEffect(()=>{
    getAllUsers();
},[]);

function handleSubmit(e){
    e.preventDefault();
    getAllUsers();
}

console.log(getAllUsers());

const viewUser=result.map(user=>{return (user)});
    console.log(viewUser);
    return(
        <div>
       <button type="submit" onClick={handleSubmit}>submit</button>
        <h3>view User : {viewUser}</h3>
        </div>
    )
}
export default Users;