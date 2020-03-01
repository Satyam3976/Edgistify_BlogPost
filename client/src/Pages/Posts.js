import React, { Component } from "react";
import axios from 'axios';

import Navigation from '../Shared/Navigation';
import "../styles/gigslist.css";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title:"",
          content:"",
          userId:"",
          _id: 1
        }
      ]
    };
  }

  logoutHandler = () => {
    // this.setState({ loggedIn: false});
    localStorage.setItem('userID', '');
    localStorage.setItem('token', '');
    localStorage.setItem('auth', 'false');
  };

  componentDidMount() {
    axios.get('//localhost:3000/post/displayPosts')
      .then(res => {
        this.setState({ posts: res.data.posts });
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (

      <React.Fragment>
      <Navigation onLogout={this.logoutHandler} />
      <section id="gig-cards-list">
        {this.state.posts.map(function (e) {
          return (
            <div key={e._id} className="gig-card">
              <div className="postlist">
                <img src="https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                alt="Italian Trulli" className="postimg" />
                </div>
              {/* <div>
                <h2>{e.title}</h2>
                <p>{e.desc}</p>
                <h4>Offer: {e.offer}</h4>
              </div> */}
              <div> 
              <h2>{e.title}</h2>
               
                </div>
              <div className="postlink">
              {/* <Link to={`viewgig#${e._id}`}>View</Link> */}
               <Link to={`ViewPost#${e._id}`}>View</Link>
              <button type="submit">Edit</button>
              <button type="submit">Delete</button>
              </div>
            </div>
          );
        })}
      </section>
      </React.Fragment>
    );
  }
}

export default Posts;
