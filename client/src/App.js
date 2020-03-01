import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./Components/header";
import Logout from "./Components/Logout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Posts from "./Pages/Posts";
import createPost from "./Pages/createPost";
import ViewPost from "./Pages/ViewPost";
import Navigation from "../src/Shared/Navigation";
import { PropTypes } from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }

  this.updateUser=this.updateUser.bind(this);
  }
  updateUser(userObject){
    this.setState(userObject);
  };

  logoutHandler = () => {
    // this.setState({ loggedIn: false});
    localStorage.setItem('userID', '');
    localStorage.setItem('token', '');
    localStorage.setItem('auth', 'false');
  };

  render(){
  return (
    <div id="page-container">
      {/* <Header /> */}
      
      <React.Fragment>
        
      <HashRouter basename="/">
      {/* <Navigation onLogout={this.logoutHandler} /> */}
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/logout" component={Logout} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/displayPost" component={Posts} exact />
        <Route path="/createPost" component={createPost} exact />
        <Route path="/viewPost" component={ViewPost} exact />
        {/* <Navigation loggedIn={this.state.loggedIn} onLogout={this.logoutHandler} updateUser={this.updateUser.bind(this)}/> */}
      </HashRouter>
      {/* <img
        src="https://t3.ftcdn.net/jpg/02/31/04/60/240_F_231046089_SjH8WEU8VNfodwNPBTAk7o5oDQriuYVC.jpg"
        alt="bkg"
        id="bkg"
      /> */}
      </React.Fragment>
    </div>
  );
  }
}

export default App;
