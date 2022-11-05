
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { update } from "lodash";
import ProfileImg from '../images/ProfileImg.png'

function Profile(props){

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [id, setId] =useState('')
    const [password, setPassword] =useState('')
    const [msg, setMsg] =useState('')
    const [ConfirmPassword, setConfirmPassword]=useState('')
    function handleUsernameInput(e){
        e.preventDefault()
        setUsername(e.target.value)
     }
    function handleEmailInput(e){
        e.preventDefault()
        setEmail(e.target.value)
        }
        function handleAgeInput(e){
            e.preventDefault()
            setAge(e.target.value)
            }

        function handlePasswordInput(e){
                e.preventDefault()
                setPassword(e.target.value)
                }
        function handleConfirmPasswordInput(e){
                    e.preventDefault()
                    setConfirmPassword(e.target.value)
                    }
const viewProfile = async function(){
    
    try {
        setId( localStorage.getItem("id"))
       
        var data = await axios.get("http://localhost:3005/users/"+localStorage.getItem("id"))
        // console.log(data);
        return{
            result:data.data.result[0]
        }
        // console.log(data.data.result);
        }catch(err){
        console.error(err);
    }
}

function ProfileUser(){
    props.token()

    viewProfile().then((value)=>{
  
    setUsername(value.result.username)
    setEmail(value.result.email)
    setAge(value.result.age)
    setPassword(value.result.password)
});
}


useEffect(()=>{
    ProfileUser();
},[])

// const updateProfile =async function(){
//     console.log(data)
//     try{
//         var data=await axios.post("http://localhost:3005/user/" + localStorage.getItem("id"))
//         console.log(data);
//         return{
//             result:data.data.result[0]
//         }
//     }
//     catch(err){
//         console.error(err);
//     }
// }




const UpdateProfile = async function() {
    
   
    try {
       
        var data = await axios.post("http://localhost:3005/users/update",
        {id:id, username:username,email:email,age:age, password:password})
    if(data.status==200){
    setMsg('User details updated succsesfully')
    }
    else{
        setMsg('Error occured please try later')
    }
        
    }
    catch(error){
        console.log(error)
    }
}

    function UpdateUser(){
        console.log("updateUser")
        // UpdateProfile().then((value)=>{
        // setUsername(value.result.username)
        // setEmail(value.result.email)
        // setAge(value.result.age)});
    }



 
  function handleUpdate(e){

    e.preventDefault()
if(password!=='' && ConfirmPassword!=='' && password===ConfirmPassword  ){
    
    UpdateProfile()
}else{
    setMsg('invalid password ')
}
}
  

if(localStorage.getItem("token")){
return (
    <div className="ProfileDiv">
    <div className="Profile">
        <p className="user-profile">User profile</p>
        <div className="profile-logo">
            
               <img src={ProfileImg} width="10%" />
        </div>

         <div className="DasbordUser">
            
            <label className="input-padding">UserName</label><br></br>
            <input type="text" className="input-padding" value={username} onChange={handleUsernameInput} ></input><br></br>
            <label>email</label><br></br>
            <input type="email" value={email} onChange={handleEmailInput} ></input><br></br>
            <label>Age</label><br></br>
            <input type="text" value={age} onChange={handleAgeInput}></input><br></br>
            <label>Password</label><br></br>
            <input type="text" value={password} onChange={handlePasswordInput}></input><br></br>
            
            <label>Confirm Password</label><br></br>
            <input type="text" value={ConfirmPassword} onChange={handleConfirmPasswordInput}></input><br></br>
            <br></br>
            <p>{msg}</p>
            <button className="profile-button" onClick={handleUpdate}>Update</button>
            </div>
            
        </div>
        <span>&#36;</span>
        

    </div>
   )
}
}
  
   
export default Profile;