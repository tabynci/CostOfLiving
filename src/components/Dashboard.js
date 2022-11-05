import React from 'react';
import SideBar from './Sidebar';
import '../App.css';
import Users from '../views/Users';
import {Link} from 'react-router-dom'

import Home from '../views/Home'
function Dashboard(props){
  props.token();
    return(
      
       <div id="App">
    
      <div id="page-wrap">
       <h3>Welcome to Admin Dashboard</h3>
     
       <Users token={props.token}/>
      </div>
    </div> 
        
    );
}
export default Dashboard;
