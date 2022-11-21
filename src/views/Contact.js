// https://www.pngkey.com/download/u2w7u2o0o0e6e6i1_contact-me-contact-button-for-website/  image for contact us
import {useState} from 'react'
import contact from '../images/contact.jpeg'
import axios from 'axios';
function Contact(){
    
   const [msg, setMsg] = useState('')
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

   function handleUsernameInput(e){
      e.preventDefault()
      setUsername(e.target.value)
  }
  function handleEmailInput(e){
      e.preventDefault()
      setEmail(e.target.value)
  }
  function handleMessageInput(e){
    e.preventDefault()
    setMessage(e.target.value)
}
 async function handleSubmit(e){
      e.preventDefault()
     if(!username == "" && !email == "" && !message == ""){
        try{
              
          var data = await axios.post("http://localhost:3005/Users/contact", {
          username: username,
          email:email,
          message: message
      
      }).then((response)=>{
          console.log(response)
          setMsg("we will conatct you soon")
          setUsername("")
          setEmail("")
          setMessage("")
      })
      
      } catch(e) {
          if(e.response.status === 400){
              setMsg(e.response.data.message)
          } else {
              setMsg("An error occured please try again later")
          }
      }

      }else{
        setMsg("please fill all the fields")
      }
  
    }
      return(
        
          <div className='contact-div'>
           
            <img src={contact} width="20%" />
            
           <header>
            <form>
            <h4 style={{color:'red'}}> {msg} </h4>
           <br/>
           <label>UserName</label> <br/>
           <input type="text" value={username} onChange={handleUsernameInput} />
           <br/>
           <label>Email</label> <br/>
           <input type='email' value={email} onChange={handleEmailInput} />
           <br/>
         <label>Message</label> <br/>
           <textarea rows = "5" cols = "50" value={message} name = "description" onChange={handleMessageInput}>
         </textarea> <br/><br></br>
           <button onClick={handleSubmit}>Submit</button>
           <br/> <br />
            </form>
           </header>
           
          </div>
          
          
      )
  
 }
 export default Contact;