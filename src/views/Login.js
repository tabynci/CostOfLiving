import {useEffect, useState} from 'react'
import axios from 'axios';
import {Navigate, Link} from 'react-router-dom'

function Login(props){
    
   const [message, setMessage] = useState('')
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
    const [error, setError]=useState('');
    const [logInUser,setLogIn] =useState(false)
    const [adminUser,setaAdminUser] =useState('n')
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

        props.setLoggedIn(true)
        props.setAdmin(data.data.result[0].admin) 
        setLogIn(true)
        setaAdminUser(data.data.result[0].admin)
    // console.log(data.data.result[0])

     } catch(error) {
      console.log(error)
}
}
}
  function handleError(e){
    e.preventDefault()
    setMessage("Enter all details")
  }

  
  if(logInUser &&  adminUser==='n'){
    console.log(props.loggedIn +'09')
      return(
          <Navigate to="/Mainpage" />
      )
  } 
  
  else if(logInUser && adminUser=='y'){
      console.log(props.loggedIn +'98')
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