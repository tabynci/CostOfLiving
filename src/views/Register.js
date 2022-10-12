import {useState, useEffect} from 'react'
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
        try{
          var data = await axios.post("http://localhost:8080/users/register", {
            username: username,
            password: password
          })
          setMessage("Successfully registered")
          setUsername("")
          setAge("")
          setEmail("")
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
        setMessage("Please enter all fields")
        setUsername("")
        setAge("")
        setEmail("")
        setPassword("")
    }
    if(props.loggedIn){
        return(
            <Navigate to="/user" />
        )
    } else {
        if(!username =="" && !email== "" && !age== "" && !password == ""){
            return(
                <div className='App'>
                 
                 <header>
                    <form>
                   
                  <h4 style={{color:'red'}}> {message} </h4>
                 <br/>
                  <label> Username<br></br></label> <br></br>
                 <input value= {username} onChange={handleUsernameInput} placeholder='Enter Username' required/>
                 <br/><br />
                 <label> Email<br></br> </label> <br></br>
                 <input type='email' value={email} onChange={handleEmailInput} placeholder='Enter Email' required />
                 <br/><br />
                 <label> Age<br></br></label> <br></br>
                 <input type='text' value={age} onChange={handleAgeInput} placeholder='Enter Age' required/>
                 <br/><br />
                 <label> Password<br></br> </label> <br></br>
                 <input type='password' value={password} onChange={handlePasswordInput} placeholder='Enter Password' required/>
                 <br/><br />
                 <button className="regBtn" onClick={handleSubmit}>Register</button><br></br><br></br>
                    </form>
                 </header>
                <div>
                    <h3>
                        Already Customer <span></span> <Link to="/login">Sign In</Link> <br></br>
                    </h3>
                </div>
                </div>
            ) 
        }  else{
            return(
                <div className='App'>
                 
                 <header>
                    <form>
                    
                  <h4 style={{color:'red'}}> {message} </h4>
                 <br/>
                  <label> Username<br></br></label> <br></br>
                 <input value= {username} onChange={handleUsernameInput} placeholder='Enter Username' required/>
                 <br/><br />
                 <label> Email<br></br> </label> <br></br>
                 <input type='email' value={email} onChange={handleEmailInput} placeholder='Enter Email' required />
                 <br/><br />
                 <label> Age<br></br></label> <br></br>
                 <input type='text' value={age} onChange={handleAgeInput} placeholder='Enter Age' required/>
                 <br/><br />
                 <label> Password<br></br> </label> <br></br>
                 <input type='password' value={password} onChange={handlePasswordInput} placeholder='Enter Password' required/>
                 <br/><br />
                 <button className="regBtn" onClick={handleError}>Register</button><br></br><br></br>
                    </form>
                 </header>
                <div>
                    <h3>
                        Already Customer <span></span> <Link to="/login">Sign In</Link> <br></br>
                    </h3>
                </div>
                </div>
            ) 
        }
       
    }
   
 }
 export default Register;