// https://www.npmjs.com/package/react-burger-menu

// https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'

export default props => {
  return (
    <div> 
        <Menu className='sidebar'>
        <Link className="menu-item" to="/">
        Home
        </Link>
         <Link className="menu-item" to="/Users">
        Users
      </Link>
      </Menu>
  </div>
   
  );
};