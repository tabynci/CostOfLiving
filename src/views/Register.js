
import {useState} from 'react'
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register(props){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
  
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
   async function handleSubmit(e){
        e.preventDefault()
        if(!username=="" && !email=="" && !age=="" ){
            try{
           
                var data = await axios.post("http://localhost:3005/Users/register", {
                username: username,
                email:email,
                age:age,
                password: password
             
            }).then((response)=>{
                console.log(response)
                setMessage("successfully registered")
                setUsername("")
                setAge("")
                setEmail("")
                setPassword("")
            })
             
              
            } catch(e) {
                if(e.response.status === 400){
                    setMessage(e.response.data.message)
                } else {
                    setMessage("An error occured please try again later")
                }
            }
        }
        else{
            setMessage("please fill all the fields")
        }
       
    }


            return(
                <div className='registerDiv'>
             <div className='register'>
                 
                  <header>
                    <form>
                        <h2 className='register-header'>Register Form</h2>
                    <br/>
                  <label> Username<br></br></label> <br></br>
                 <input value= {username} onChange={handleUsernameInput} placeholder='Enter Username' required/>
                 <br/>
                 <label> Email<br></br> </label> <br></br>
                 <input type='email' value={email} onChange={handleEmailInput} placeholder='Enter Email' required />
                 <br/>
                 <label> Age<br></br></label> <br></br>
                 <input type='text' value={age} onChange={handleAgeInput} placeholder='Enter Age' required/>
                 <br/>
                 <label> Password<br></br> </label> <br></br>
                 <input type='password' value={password} onChange={handlePasswordInput} placeholder='Enter Password' required/>
                 <br/>     <br/>
                 <button className="regBtn" onClick={handleSubmit} >Register</button><br/><br/>
                    </form>
                 </header>
                <div className='registers'>
                <h4 style={{color:'red'}}> {message} </h4>
                    <h3>
                        Already Customer <span></span> <Link to="/login">Sign In</Link> 
                    </h3>
                </div>
                </div>
                 </div>
            ) 
        
       
    }
   
 
 export default Register;