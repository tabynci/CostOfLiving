import {useEffect, useState} from 'react'
import axios from 'axios';
import {Navigate, Link} from 'react-router-dom'

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

  if(username && password ){
    
  try{

    var data = await axios.post("http://localhost:3005/login",{username:username, password:password })
       localStorage.setItem("token",data.data.result[0]?'true':'false')
       localStorage.setItem("admin",data.data.result[0].admin)
        localStorage.setItem("id", data.data.result[0].id)
        setLoggedIn(data.data.result[0]?'true':'false')
        setAdmin(data.data.result[0].admin)
        props.token()
    

     } catch(error) {
      console.log(error)
}
}
}
  function handleError(e){
    e.preventDefault()
    setMessage("Enter all details")
  }

  if(loggedIn === 'true' && admin.toUpperCase() === 'N'  ){
    
    console.log(loggedIn +'09')
      return(
          <Navigate to="/Mainpage" />
      )
  } 
  
  else if(loggedIn==='true' && admin==='y'){
      console.log(loggedIn +'98')
      return(
          <Navigate to="/Dashboard" />
      )
    }
 
   else if(!username === "" && !password === ""){
        return(
          <div className='loginDiv'>
             <div className='login'>
             
             <header>
              <form>
              
                  <h4> {message} </h4>
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
          </div>
           
           )
    } 
      else {
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
             <Link to="/forgotPassword">ForgotPassword</Link></p>
             <br/>
             <div>
              <h4>Not a Customer 
               <span></span>   <Link to="/register">Register</Link></h4>
             </div>
              </form>
             </header>
             
            </div>
          </div>
            
           )
    }

  }
 
 export default Login;