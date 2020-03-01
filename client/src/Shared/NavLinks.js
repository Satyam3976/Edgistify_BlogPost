import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
//   const auth = useContext(AuthContext);


  return (
    <ul className="nav-links">
      <li>
        {/* {localStorage.getItem('token') === '' ? <Link to='/signup' id="left_hover">Sign Up</Link> : '' }
        {localStorage.getItem('token') === '' ? <Link to='/login' id="right_hover">Log In</Link> : '' }
        {localStorage.getItem('token') === '' ? '' : <Link to='/logout' onClick={props.onLogout}>Logout</Link>} */}
        {props.isAuth === false ? <Link to='/login' handle={props.onLogin} id="right_hover">Log In</Link> : '' }
        {props.isAuth === false ? <Link to='/signup' handle={props.onLogin} id="left_hover">Sign Up</Link> : '' }
        {props.isAuth === true ? <Link to='/logout' onClick={props.onLogout}>Logout</Link>: ''} 
        {/* <button onClick={props.onLogout}>Logout</button> */}
      </li>
    </ul>
  );
};

export default NavLinks;
