//Tried to implement forgot


// import { useState } from "react"
// import axios from "axios";

// function ForgotPassword(props){
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('')

    
//     function handleEmailInput(e){
//         e.preventDefault()
//         setEmail(e.target.value)
//     }

//     async function handleSubmit(e){
//         e.preventDefault()
//         try{
//           var data = await axios.post("http://localhost:3005/users", {
//             email: email,
//           })
//             localStorage.setItem('token', data.data.token)
//             props.setLoggedIn(true)
//             setEmail("")
//             setMessage("A password reset link  has been sent to your registered email address.")
//         } catch(e) {
//             if(e.response.status === 400){
//                 setMessage(e.response.data.message)
//             } else {
//                 setMessage("An error occured please try again later")
//             }
//         }
//     }
//    return(
    
//     <div className="forgotDiv">
//         <div className="forgotPassword ">
//         <form>
//             <h1>Yet to be implemented</h1>
//             <h4>Password Reset</h4>
//              <label>Email</label><br/><br/>
//              <input type='email' value= {email} onChange={handleEmailInput} placeholder='abcd@gmail.com' required />
//              <br/><br/>
//              <button onClick={handleSubmit}>Submit</button><br/><br/>
//              <h4>{message}</h4>
//         </form>
//          </div>
//      </div>

//    )
// }
// export default ForgotPassword;