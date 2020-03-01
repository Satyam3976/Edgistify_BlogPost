import React from "react";
import axios from "axios";
import "../styles/gigslist.css";
import Navigation from "../Shared/Navigation";

class Post extends React.Component {
  state = {
    title: '',
    content: '',
    userId: '',
    err: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }
  // handleNegotiate = (e) => {
  //   this.setState(prevState => {
  //     return {
  //       negotiable: !prevState.negotiable
  //     }
  //   })
  // }
  // handleDate = e => {
  //   let date = new Date(e.target.value);
  //   this.setState({ deadline: date });
  // }
    handleSubmit = (e) => {
    e.preventDefault();

    let userId = localStorage.getItem('userID');
    console.log(userId)

    const { title, content} = this.state;
    if (!title || !content ) {
      this.setState({ err: 'Please check your inputs' });
      return;
    }

    
    axios
      .post("/post/createPost", {
        title,
        content,
        userId
      })
      .then(res => {
        this.props.history.push('/displayPost')
      })
      .catch(err => console.error(err));
  }

  logoutHandler = () => {
    // this.setState({ loggedIn: false});
    localStorage.setItem('userID', '');
    localStorage.setItem('token', '');
    localStorage.setItem('auth', 'false');
  };

  render() {
    return (
      <>
      <Navigation onLogout={this.logoutHandler} />
      <section id="post-gig-container">
        {this.state.err}
        <form id="post-gig">
          <h2>Post A Gig:</h2>
          <label>Post Title:</label>
          <input type="text" name="title" onChange={this.handleChange} />
          <label>Content:</label>
          <textarea rows="10" cols="30" name="content" onChange={this.handleChange}></textarea>
          {/* <label>Offer:</label>
          <input type="number" placeholder="Enter the amount you offer" name="offer" onChange={this.handleChange} /> */}
          {/* <div style={{ marginBottom: "15px" }}>
            <input type="checkbox" name="negotiable" onClick={this.handleNegotiate} /> */}
            {/* <label style={{ marginLeft: "15px" }}>Negotiable</label>
          </div>
          <label>Deadline</label>
          <input type="date" name="deadline" onChange={this.handleDate} /> */}
          <input className="btn" type="Submit" onClick={this.handleSubmit} />
        </form>
      </section>
      </>
    );
  }
}

export default Post;
