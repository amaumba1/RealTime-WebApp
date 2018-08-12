import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import Navigation from './profile/Navigation'; 
import LandingPage from './layout/Landing'; 
import SignUpPage from './auth/SignUp';
import SignInPage from './auth/SignIn';
import PasswordForgetPage from './auth/PasswordForget';
import HomePage from './layout/Home';
import AccountPage from './profile/Account'; 
import AdminPage from './profile/Admin'; 

import * as routes from '../constants/routes'; 

import withAuthentication from './auth/withAuthentication'; 

const App = () => 

      <Router>
        <div>
          <Navigation />
          <hr />

          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
          <Route 
            path={routes.ADMIN}
            component={() => <AdminPage />}
          />

        </div>
      </Router>

export default withAuthentication(App); 
