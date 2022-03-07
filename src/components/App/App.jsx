import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
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
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/companies" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
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
            path="/companies/:id"
          >
            <CompanyDetails />
          </ProtectedRoute>

          <Route
            // logged in shows ContactUs page else shows LoginPage
            exact
            path="/contactUs"
          >
            <ContactUs />
          </Route>

          <ProtectedRoute
            // logged in shows admin Users page else shows LoginPage
            exact
            path="/admin/users"
          >
            <Users />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows admin AddRules page else shows LoginPage
            exact
            path="/admin/addRules"
          >
            <AddRules />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows admin messages else shows LoginPage
            exact
            path="/admin/messages"
          >
            <Messages />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }

            {/* {(user.id && user.auth_level === 1) ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/users" />
              :
              // Otherwise, show the login page
              <LoginPage />
            } */}
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

          <Route
            exact
            path="/survey"
          >
            {user.id ?
              // If the user is already logged in, 
              // show the /survey page
              <Redirect to="/survey" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/companies"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /companies page
              <Redirect to="/companies" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/companies"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /companies/:id page
              <Redirect to="/companies/:id" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/contact"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /contactUs page
              <Redirect to="/contactUs" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/users"
          >
            {(user.id && user.auth_level === 1) ?
              // If the user is already logged in, 
              // redirect them to the /admin/users page
              <Redirect to="/admin/users" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/addRules"
          >
            {(user.id && user.auth_level === 1) ?
              // If the user is already logged in, 
              // redirect them to the /admin/addRules page
              <Redirect to="/admin/addRules" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/messages"
          >
            {(user.id && user.auth_level == 1) ? 
              // If the admin is already logged in, 
              // redirect them to the /admin/messages page
              <Redirect to="/admin/messages" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}

          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
