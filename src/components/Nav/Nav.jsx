import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  const [ selectNav, setSelectNav ] = useState('/');

  return (
    <div className="nav">
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/survey">
              Survey
            </Link>

            <Link className="navLink" to="/companies">
              Companies
            </Link>

            <Link className="navLink" to="/contactUs">
              Contact Us
            </Link>
          </>
        )}

        {/* If an admin is logged in, show these links */}
        {user.auth_level == 1 && (
          <>
            <Link className="navLink" to="/users">
              Users
            </Link>

            <Link className="navLink" to="/admin/addRule">
              Add Rules
            </Link>

            <Link className="navLink" to="/messages">
              Messages
            </Link>
          </>
        )}
        <Link className="navLink" to="/about">
          About
        </Link>

        {/* If a user is logged in, show show logout */}
        {user.id && (
          <>
          <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
