import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
// import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Survey from '../Survey/Survey';
import Companies from '../Companies/Companies';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import ContactUs from '../ContactUs/ContactUs';
import Users from '../Users/Users';
import AddRules from '../AddRules/AddRules';
import Messages from '../Messages/Messages';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });

    dispatch({ type: 'FETCH_MEMBERSHIP_RULES' });

    dispatch({ type: 'FETCH_SCORE_RULES' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
          {/* Visiting / or /home will redirect to /companies */}
          <Redirect exact from="/" to="/about" />
          <Redirect exact from="/home" to="/about" />

          {/* Visiting /about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting /user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on /user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            //logged in shows Survey page else shows LoginPage
            exact
            path="/survey"
          >
            <Survey />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows companies else shows LoginPage
            exact
            path="/companies"
          >
            <Companies />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows companyDetails page else shows LoginPage
            exact
            path="/companies/details/:name/:wikiName"
          >
            <CompanyDetails />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows ContactUs page
            exact
            path="/contactUs"
          >
            <ContactUs />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/admin/users"
          >
            {(user.auth_level >= 1) ?
              // admin shows User Info page
              <Users />
              :
              // Otherwise, redirect to the Companies page
              <Redirect to="/companies" />
            }
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/admin/addRule"
          >
            {(user.auth_level >= 1) ?
              // admin shows AddRules page
              <AddRules />
              :
              // Otherwise, redirect to the Companies page
              <Redirect to="/companies" />
            }
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/admin/messages"
          >
            {(user.auth_level >= 1) ?
              // admin shows Messages page
              <Messages />
              :
              // Otherwise, redirect to the Companies page
              <Redirect to="/companies" />
            }

          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to /companies page
              <Redirect to="/about" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /about page
              <Redirect to="/about" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}

          <Route>
            <h1>404 Error</h1>
            <h4> Page not found</h4>
            <Link to='/'><p>Click here to go back to the main page</p></Link>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
