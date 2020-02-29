import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import NavLinks from './NavLinks';
import './Navigation.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from 'react-router-dom';

const Navigation = props => {
    // const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  
    // const openDrawerHandler = () => {
    //   setDrawerIsOpen(true);
    // };
  
    // const closeDrawerHandler = () => {
    //   setDrawerIsOpen(false);
    // };
  
    // return (
    //   <React.Fragment>
    let routes
    return(
        <Switch>
        {/* {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer> */}
        <Header>
        {/* { <button className="navigation-btn-1">Login</button>
          <button className="navigation-btn-2">Signup</button> } */}
          <h1 className="main-navigation__title">
            <Link to="/">YourPlaces</Link>
          </h1> 

          {localStorage.getItem('token') === '' ? <Link to='/signup' id="left_hover">Sign Up</Link> : '' }
          {localStorage.getItem('token') === '' ? <Link to='/login' id="right_hover">Log In</Link> : '' }
          {localStorage.getItem('token') === '' ? '' : <Link to='/logout'>Logout</Link>}

          {/* <nav className="main-navigation__header-nav">
            <NavLinks />
          </nav> */}
        </Header>  
        </Switch> 
    ) 
    //   </React.Fragment>
    // );
  };
  
  export default Navigation;
  