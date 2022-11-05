import React, { useEffect, useState } from "react";
import axios from 'axios'
import SideBar from '../components/Sidebar';
import Table from 'react-bootstrap/Table';
// Taken button https://vegibit.com/how-to-delete-an-item-from-an-array-in-react/#:~:text=React%20Key%20Concept&text=The%20delete%20button%20exists%20on,done%20in%20that%20component%20itself.
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
    
    return <div className="user-div">
        <h2>ID:{user.id}</h2>
        <h4>Username:{user.username}</h4>
        <h4>Email:{user.email}</h4>
        <h4>Age:{user.age}</h4>
        <br/>
        <button className="btn btn-lg btn-outline-danger ml-4">Delete</button>
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
        <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>User Id</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        result.map((user)=>{
                            
                        return (<tr><td >{user.id}</td>
                             <td >{user.username}</td>
                                <td>{user.email}</td>
                            <td>{user.age}</td>
                           <td> <button className="btn btn-lg btn-outline-danger ml-4">Delete</button></td>
                        </tr>);
                        })
                    }
                    </tbody>
                   
                </Table>
                </div>
       
        </div>
    )
}
   
    

export default Users;