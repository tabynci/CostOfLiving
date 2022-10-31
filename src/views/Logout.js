import {Navigate} from 'react-router-dom'

function Logout(props){
props.setLoggedIn(false)
  return(
   <Navigate to="/" />
  )

 
 }
 export default Logout;