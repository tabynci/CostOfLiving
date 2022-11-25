import React, { useEffect, useState } from "react";
import axios from 'axios'
import SideBar from '../components/Sidebar';
import Table from 'react-bootstrap/Table';
import { set } from "lodash";
import e from "cors";
// Taken button https://vegibit.com/how-to-delete-an-item-from-an-array-in-react/#:~:text=React%20Key%20Concept&text=The%20delete%20button%20exists%20on,done%20in%20that%20component%20itself.
function Users(props){


const [err, setErr]=useState('not connected');

const [result, setResult]=useState([])
const [users, setUsers]=useState([])

// const [id, setId]=useState('')
props.token();

const getAllUsers = async function(){
    
    try {
        var data = await axios.get("http://localhost:3005/users")
        // console.log(data);
        setResult(data.data)
        // console.log(data.data.result);
        }catch(err){
        console.error(err);
    }
}


async function deletUser (e){
    e.preventDefault();
    try{
        // console.log("http://localhost:3005/users/"+e.target.id)
        var data =await axios.delete("http://localhost:3005/users/"+e.target.id)

    
    }catch(error){
        console.log(err)
}

}


// const deletePost=(id)=>{
//     data.delete(`${id}`);
//     setUsers()
// }

const viewUser=result.map(user=>{
    
    return <div className="user-div">
        <h2>ID:{user.id}</h2>
        <h4>Username:{user.username}</h4>
        <h4>Email:{user.email}</h4>
        <h4>Age:{user.age}</h4>
        <br/>
        <ul>
        </ul>
     
         </div>
});

useEffect(()=>{
    getAllUsers();
   
    // viewUser();
},[deletUser]);

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
                                 <td>{user.username}</td>
                                <td>{user.email}</td>
                            <td>{user.age}</td>
                           <td> <button onClick={deletUser} id={user.id} className="btn btn-lg btn-outline-danger ml-4">Delete</button></td>
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