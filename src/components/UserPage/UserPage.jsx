import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.id}!</h2>
      <p>Your ID is: {user.id}</p>
      {/* once you figure your stuff out
      DES, you can remove the code I'm putting
      Below. It's just to navigate to the 
      companies page
       */}
      <Link to="/companies"><button> Companies </button></Link>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
