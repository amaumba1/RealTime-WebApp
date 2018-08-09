import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext'; 
import SignOutButton from './SignOut'
import * as routes from '../constants/routes';

const Navigation = () => 
        <AuthUserContext.Consumer>
        { authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth /> }
        </AuthUserContext.Consumer>
    

const NavigationAuth = () => 
    <nav className="navbar navbar-light sm-light">
        <a className="navbar-brand"><Link to={routes.HOME}>Home</Link></a>
        <a className="navbar-brand"><Link to={routes.LANDING}>Landing</Link></a>
        <a className="navbar-brand"><Link to={routes.ACCOUNT}>Account</Link></a>
        <a className="navbar-brand"><SignOutButton /></a> 
            
</nav>

const NavigationNonAuth = () => 
        <ul className="nav justify-content-end">
            <li className="nav-item"><Link to={routes.LANDING}>Landing</Link></li>
            <li className="nav-item"><Link to={routes.SIGN_IN}>Sign In</Link></li>
        </ul>
    

export default Navigation; 