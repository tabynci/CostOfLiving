//https://www.freeiconspng.com/downloadimg/18019 image for login
import {useEffect, useState} from 'react'
import axios from 'axios';
import {Navigate, Link} from 'react-router-dom'

function Login(props){
    
   const [message, setMessage] = useState('')
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

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
      try{
        var data = await axios.post("http://localhost:8080/users/login", {
          username: username,
          password: password
        })
          localStorage.setItem('token', data.data.token)
          props.setLoggedIn(true)
          setUsername("")
          setPassword("")
      } catch(e) {
          if(e.response.status === 400){
              setMessage(e.response.data.message)
          } else {
              setMessage("An error occured please try again later")
          }
      }
  }
  function handleError(e){
    e.preventDefault()
    setMessage("Enter all details")
  }

  if(props.loggedIn){
      return(
          <Navigate to="/user" />
      )
  } else{
    if(!username == "" && !password == ""){
        return(
            <div className='App'>
             
             <header>
              <form style={{padding: '10px', paddingBottom: '100px'}}>
             
                  <h4> {message} </h4>
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
             <Link to="/forgotPassword">ForgotPassword</Link></p>
             <br/>
             <div>
              <h4>Not a Customer 
               <span></span>   <Link to="/register">Register</Link></h4>
             </div>
              </form>
             </header>
             
            </div>
           )
    } else {
        return(
            <div className='App'>
             
             <header>
              <form style={{padding: '10px', paddingBottom: '100px'}}>
             
                  <h4 style={{color:'red'}}> {message} </h4>
             <br/>
             <label>UserName</label> <br/><br/>
             <input type="text" value={username} onChange={handleUsernameInput} placeholder='Enter Username' required />
             <br/><br />
             <label>Password</label> <br/><br/> 
             <input type='password' value={password} onChange={handlePasswordInput} placeholder='Enter Password' required/>
             <br/> <br />
             <button className='logBtn' onClick={handleError}>Login</button>
             <br/> <br />
             <p>ForgotPassword click <span></span>
             <Link to="/forgotPassword">ForgotPassword</Link></p>
             <br/>
             <div>
              <h4>Not a Customer 
               <span></span>   <Link to="/register">Register</Link></h4>
             </div>
              </form>
             </header>
             
            </div>
           )
    }
      
  }
 }
 export default Login;