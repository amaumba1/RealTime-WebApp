import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../auth/AuthUserContext'; 
import SignOutButton from '../auth/SignOut'
import * as routes from '../../constants/routes';

const Navigation = () => 
        <AuthUserContext.Consumer>
        { authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth /> }
        </AuthUserContext.Consumer>


const NavigationAuth = () => 
  <nav>
        <a><Link to={routes.HOME}>Home</Link></a>
        <a><Link to={routes.LANDING}>Landing</Link></a>
        <a><Link to={routes.ACCOUNT}>Account</Link></a>
        <a><Link to={routes.ADMIN}>Admin</Link></a>
        <a><SignOutButton /></a>
  </nav>

const NavigationNonAuth = () => 
  <nav>
    <a><Link to={routes.LANDING}>Landing</Link></a>
    <a><Link to={routes.SIGN_IN}>Sign In</Link></a>
  </nav>
      
    

export default Navigation; 