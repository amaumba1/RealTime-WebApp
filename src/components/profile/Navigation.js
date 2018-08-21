import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem,} from 'react-bootstrap';

import AuthUserContext from '../auth/AuthUserContext'; 
import SignOutButton from '../auth/SignOut'
import * as routes from '../../constants/routes';

const Navigation = () => 
        <AuthUserContext.Consumer>
        { authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth /> }
        </AuthUserContext.Consumer>


const NavigationAuth = () => 
  <Navbar fluid defaultNavExpanded>
    <Navbar.Header>
        <Navbar.Brand>
          <a><Link to={routes.HOME}>Home</Link></a>
        </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav>
        <NavItem>
           <a><Link to={routes.LANDING}>Landing</Link></a>
        </NavItem>
    </Nav>
    <Nav>
        <NavItem>
           <a><Link to={routes.ACCOUNT}>Account</Link></a>
        </NavItem>
    </Nav>
    <Nav>
        <NavItem>
           <a><Link to={routes.ADMIN}>Admin</Link></a>
        </NavItem>
    </Nav>
    <Nav pullRight>
        <NavItem>
           <a><SignOutButton /></a>
        </NavItem>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  

const NavigationNonAuth = () => 
  <Navbar fluid defaultNavExpanded>
    <Navbar.Header>
        <Navbar.Brand>
          <a><Link to={routes.LANDING}>Landing</Link></a>
        </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav>
        <NavItem>
           <a><Link to={routes.SIGN_IN}>Sign In</Link></a>
        </NavItem>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
      
    

export default Navigation; 