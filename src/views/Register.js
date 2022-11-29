
import {useState} from 'react'
import {Link } from 'react-router-dom';
import axios from 'axios';
import APi from './File';

function Register(props){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [errorUsername, setErrorUsername]=useState('')
    const [errorEmail, setErrorEmail]=useState('')
    const [errorPassword, setErrorPassword]=useState('')
    const [errorAge, setErrorAge]=useState('')
    const [error, setError]=useState('')
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);

    function handleUsernameInput(e){
        e.preventDefault()
        setError('')
        setUsername(e.target.value)
    }
    function handleEmailInput(e){
      
        e.preventDefault()
        setError('')
        setEmail(e.target.value)
    }
    function handleAgeInput(e){
        e.preventDefault()
        setError('')
        setAge(e.target.value)
    }
    function handlePasswordInput(e){
        e.preventDefault()
        setError('')
        setPassword(e.target.value)
    }
   const validEmail = new RegExp( '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const ValidUsername =new RegExp('[a-zA-Z][*0-9]');

   async function handleSubmit(e){
        e.preventDefault()

        if(username!=="" && email!=="" && age!=="" ){
            setError('');
            if (!(validEmail.test(email))) {
                console.log(!(validEmail.test(email)))
                setEmailErr(true);
             }else if(!(ValidUsername.test(username))){
                
                setUsernameError(true);
             }else if (!(validPassword.test(password))) {
                setPwdError(true);
             }else{
                try{
                    // console.log("value" + APi.host);
                     await axios.post(APi.host + "/Users/register", {
                    username: username,
                    email:email,
                    age:age,
                    password: password
                 
                }).then((response)=>{
                    console.log(response)
                    setUsername("")
                    setAge("")
                    setEmail("")
                    setPassword("")
                    setError("")
                    setEmailErr("")
                    setErrorUsername("")
                    setErrorPassword("")
                    setMessage("Successfully Registered")
                 })
                 }catch(e) {
                    if(e.response.status === 400){
                        setMessage(e.response.data.message)
                    } else {
                        setMessage("An error occured please try again later")
                    }
                }
             }
            
        }else if(username==="" && password!=="" && email!=="" && age !==""){
            setErrorUsername("Please enter username")
        } else if(username!=="" && password==="" && email!==""  && age !==""){
            setErrorPassword("Please enter password")
        }else if(username!=="" && password!=="" && email===""  && age !==""){
            setErrorEmail("Please enter email")
        } else if(username!=="" && password!=="" && email!==""  && age ===""){
            setErrorAge("Please enter age")
        } else{
            setError("please fill all the fields")
        }
       
    }
             return(
                <div className='registerDiv'>
             <div className='register'>
                 
                  <header>
                    <form>
                        <h1 className='register-header'>Register Form</h1>
                    <br/>
                    <div>
                    <label> Username<br></br></label> <span style={{ color: 'red' }}>*</span> <br></br>
                 <input value= {username}  onChange={handleUsernameInput} placeholder='Enter Username' required/>
                 <br/>
                    </div>
                 <div>
                 <label> Email<br></br> </label><span style={{ color: 'red' }}>*</span> <br></br>
                 <input type='email' value={email}  onChange={handleEmailInput} placeholder='Enter Email' required />
                 <br/>
                 </div>
                <div>
                <label> Age<br></br></label> <br></br>
                 <input type='text' value={age}  onChange={handleAgeInput} placeholder='Enter Age' required/>
                 <br/>
                </div>
                 <div>
                 <label> Password<br></br> </label><span style={{ color: 'red' }}>*</span> <br></br>
                 <input type='password' value={password} onChange={handlePasswordInput} placeholder='Enter Password' required/>
                 <br/><br/>
                 </div>
                 <div>
                 <button className="regBtn"  onClick={handleSubmit} >Register</button><br/><br/>
                </div>
                 </form>
                 </header>
                <div className='registers'>
                <h4 style={{color:'green'}}> {message} </h4>
                <h4 style={{color:'red'}}> {errorUsername} </h4>
                <h4 style={{color:'red'}}> {errorPassword} </h4>
                <h4 style={{color:'red'}}> {errorEmail} </h4>
                <h4 style={{color:'red'}}> {errorAge} </h4>
                <h4 style={{color:'red'}}> {error} </h4>
                {/* <h4 style={{color:'red'}}> {emailErr} </h4>
                <h4 style={{color:'red'}}> {pwdError} </h4> */}
                {emailErr && <p style={{color:'red'}} >Your email is invalid</p>}
                {pwdError && <p style={{color:'red'}}>Your password is invalid</p>}
                {usernameError && <p style={{color:'red'}}>Your username is invlaid</p>}
                    <h3>
                        Already Customer <span></span> <Link to="/login">Sign In</Link> 
                    </h3>
                </div>
                </div>
                 </div>
            ) 
        
       
    }
   
 
 export default Register;