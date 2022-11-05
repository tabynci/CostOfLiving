import React, { useEffect, useState } from "react";
import axios from 'axios'
import SideBar from '../components/Sidebar';

function Users(props){


const [err, setErr]=useState('not connected');

const [result, setResult]=useState([])
props.token();

const getAllUsers = async function(){
    
    try {
        var data = await axios.get("http://localhost:3005/users")
        // console.log(data);
        setResult(data.data.result)
        // console.log(data.data.result);
        }catch(err){
        console.error(err);
    }
}

const viewUser=result.map(user=>{
    
    return <div>
        <h2>ID:{user.id}</h2>
        <h4>Username:{user.username}</h4>
        <h4>Email:{user.email}</h4>
        <h4>Age:{user.age}</h4>
        <br/>
         </div>
});

useEffect(()=>{
    getAllUsers();
    // viewUser();
},[]);





// console.log(getAllUsers());

    return(
       
        <div id="App">
        <SideBar />
        <div>
           <h3>{viewUser}</h3> 
        </div>
        </div>
    )
}
   
    

export default Users;