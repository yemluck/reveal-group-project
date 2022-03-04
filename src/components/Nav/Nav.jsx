import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Reveal</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.auth_level === 0 && (
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

            <LogOutButton className="navLink" />
          </>
        )}

        {/* If an admin is logged in, show these links */}
        {user.auth_level == 1 && (
          <>
            <Link className="navLink" to="/users">
              Users
            </Link>

            <Link className="navLink" to="/addRules">
              Add Rules
            </Link>

            <Link className="navLink" to="/messages">
              Messages
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
