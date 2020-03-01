// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import { PropTypes } from 'react'

// import Header from './Header';
// import NavLinks from './NavLinks';
import './Navigation.css';
import Header from './Header';
// import {
//     BrowserRouter as Router,
//     Route,
//     Redirect,
//     Switch
//   } from 'react-router-dom';
// // import Login from '../Pages/Login'

// const Login = props => (<Login/>);

// const Navigation = (props) => {
//     // const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  
//     // const openDrawerHandler = () => {
//     //   setDrawerIsOpen(true);
//     // };
  
//     // const closeDrawerHandler = () => {
//     //   setDrawerIsOpen(false);
//     // };
  
//     // return (
//     //   <React.Fragment>
//     let routes
//     return(
//         <Switch>
//         {/* {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
//         <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
//           <nav className="main-navigation__drawer-nav">
//             <NavLinks />
//           </nav>
//         </SideDrawer> */}
//         <Header>
//         {/* { <button className="navigation-btn-1">Login</button>
//           <button className="navigation-btn-2">Signup</button> } */}
//           <h1 className="main-navigation__title">
//             <Link to="/logout" updateUser={props.updateUser}>YourPlaces</Link>
//           </h1> 
//           <h1 className="main-navigation__title">
//             {/* <Route path="/login" component={Login} exact render={() => <Login loggedIn={props.loggedIn} updateUser={props.updateUser} />}/> */}
//             {/* <Link to="/login" updateUser={props.updateUser}>Login</Link> */}
//           </h1>

//           {/* {localStorage.getItem('token') === '' ? <Link to='/signup' id="left_hover">Sign Up</Link> : '' }
//           {localStorage.getItem('token') === '' ? <Link to='/login' id="right_hover">Log In</Link> : '' }
//           {localStorage.getItem('token') === '' ? '' : <Link to='/logout'>Logout</Link>} */}

//           <nav className="main-navigation__header-nav">
//             {/* <NavLinks isAuth={props.isAuth} onLogout={props.onLogout} onLogin={props.onLogin}/> */}
//             {props.loggedIn === false ? <Link to='/login' id="right_hover">Log In</Link> : <Link to='/logout'>Logout</Link> }
//             {props.loggedIn === false ? <Link to='/signup'  id="left_hover">Sign Up</Link> : '' }
//             {props.loggedIn === true ? <Link to='/logout' onClick={props.onLogout}>Logout</Link>: ''} 
//           </nav>
//         </Header>  
//         </Switch> 
//     ) 
//     //   </React.Fragment>
//     // );
//   };
  
//   export default Navigation;
  

import React, { Component } from 'react'
import {Link}  from 'react-router-dom'

export default class Navigation extends Component {
  state = {
    auth: false
  }
  componentDidMount() {
    let check
    if(localStorage.getItem('token')){
      check =true;
    }
    this.setState({auth: check});
    console.log(this.state.auth);
  }

  
  render() {
    return (
      <div className="navbar">
        <Header>
        <h1 >
             <Link to="/displayPost" className="title">BlogPost</Link>
        </h1>
        <nav className="main-navigation__header-nav">
             {this.state.auth === true ? <> <Link to="/createPost" className="logout-button" >Create Post</Link> <Link to='/logout' className="logout-button" onClick={() => this.setState({auth:false})} >Logout</Link> </> : <> <Link to="/signup" className="logout-button">SignUp</Link> <Link to="/login" className="logout-button">Login</Link> </>} 
           </nav>
        </Header>   
      </div>
    )
  }
}