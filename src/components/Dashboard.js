import React from 'react';
import SideBar from './Sidebar';
import '../App.css';
function Dashboard(){
    return(
        <div id="App">
      <SideBar />
      <div id="page-wrap">
        <h1>users</h1>
       
      </div>
    </div>
    );
}
export default Dashboard;