import {useEffect, useState} from 'react'
import axios from 'axios';
import {Navigate, Link} from 'react-router-dom'
// import verifyToken, { auth } from '../auth/auth'

function Login(props){
    
   const [message, setMessage] = useState('')
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
    const [error, setError]=useState('');
    const [loggedIn,setLoggedIn] =useState('false')
    const [admin,setAdmin] =useState('n')

    
   function handleUsernameInput(e){
      e.preventDefault()
      setUsername(e.target.value)
     }
 
  function handlePasswordInput(e){
      e.preventDefault()
      setPassword(e.target.value)
  }
 async function handleSubmit(e){
  e.preventDefault()

  if(username  && password ){
    
  try{

    var data = await axios.post("http://localhost:3005/Users/login",{username:username, password:password })
    if(data) {
       console.log(data);
        // localStorage.setItem("token",data.data.token)
        // localStorage.setItem("admin",data.data.admin)
        sessionStorage.setItem("token",data.data.Usertoken)
        sessionStorage.setItem("admin",data.data.admin)
        setLoggedIn((data.data.Usertoken?'true':'false'))
        setAdmin(data.data.admin)
        props.token()
    }
    } catch(error) {
      console.log(error)
    }
}else{
  setMessage("enter all fields")
}
     
}
 
  // to check only for user login
  if(loggedIn === 'true' && admin.toUpperCase() === 'N'  ){
    console.log(loggedIn +'09')
      return(
          <Navigate to="/Mainpage" />
      )
  } 
  // to check only for admin login
  else if(loggedIn==='true' && admin==='y'){
      console.log(loggedIn +'98')
      return(
          <Navigate to="/Dashboard" />
      )
    }
         
    return(
          <div className='loginDiv'>
            <div className='login'>
             
             <header>
              <form>
             <h4 style={{color:'red'}}> {message} </h4>
             <br/>
             <label>UserName</label> <br/><br/>
             <input type="text" value={username} onChange={handleUsernameInput} placeholder='Enter Username' required />
             <br/><br />
             <label>Password</label> <br/><br/> 
             <input type='password' value={password} onChange={handlePasswordInput} placeholder='Enter Password' required/>
             <br/> <br />
             <button className='logBtn' onClick={handleSubmit}>Login</button>
             <br/> <br />
             <p>ForgotPassword click <span></span>
             <Link to="/ForgotPassword">ForgotPassword</Link></p>
             <br/>
             <div>
              <h4>Not a Customer 
               <span></span>   <Link to="/Register">Register</Link></h4>
             </div>
              </form>
             </header>
             
            </div>
          </div>
            
        )
    

  }
 
 export default Login;