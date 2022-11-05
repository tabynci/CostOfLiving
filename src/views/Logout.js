import {Navigate} from 'react-router-dom'

function Logout(props){
localStorage.removeItem('token')
localStorage.removeItem('admin')
props.token();
  return(
   <Navigate to="/" />
  )
 }
 export default Logout;