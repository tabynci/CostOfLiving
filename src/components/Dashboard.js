import React from 'react';
import SideBar from './Sidebar';
import '../css/style.css';
import Users from '../views/Users';
import UserContact from '../views/UserContact';
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import Home from '../views/Home'
function Dashboard(props){
  console.log(props)
  props.token();
    return(
      <div>
        <Helmet><title>Dashboard</title></Helmet>
       {/* <h3>Welcome to Admin Dashboard</h3> */}
        <Users token={props.token}/>
      </div>
      
    );
}
export default Dashboard;
