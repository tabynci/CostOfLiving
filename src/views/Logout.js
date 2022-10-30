import {Navigate} from 'react-router-dom'

function Logout(props){
  localStorage.setItem("token", "")
  props.setLoggedIn(false)
    return(
     <Navigate to="/" />
    )
 }
 export default Logout;