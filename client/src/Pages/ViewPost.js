import React from "react";
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './CommentBox.css';
import Navigation from "../Shared/Navigation";

class ViewPost extends React.Component {
  state = {
     post: {
      title: '',
      content:'',
      userId:'',
      _id: ''
    },
    comment: [
      {
        _id: '',
        author: '',
        postId: '',
        text: ''
      }
    ]
  }

  // onChangeText = (e) => {
  //   const newState = { ...this.state.comment };
  //   // newState[e.target.name] = e.target.value;
  //   this.setState(newState);
  // }



  handleChange=()=>{
      // const { gigID } = this.props.location.state;
      let hash = this.props.location.hash;
      let postID = hash.split('#')[1];
      axios.post('//localhost:3000/post/displayPost', { postID })
        .then(res => {
          console.log(res);
          this.setState({ post: res.data.post });
          this.setState({comment: res.data.comment});
        })
      
        .catch(err => {
          console.log(err)
        })  
  }
  componentDidMount() {
    // const { gigID } = this.props.location.state;
    let hash = this.props.location.hash;
    let postID = hash.split('#')[1];
    axios.post('//localhost:3000/post/displayPost', { postID })
      .then(res => {
        console.log(res);
        this.setState({ post: res.data.post });
        this.setState({comment: res.data.comment});
      })
    
      .catch(err => {
        console.log(err)
      })  
  }


  logoutHandler = () => {
    // this.setState({ loggedIn: false});
    localStorage.setItem('userID', '');
    localStorage.setItem('token', '');
    localStorage.setItem('auth', 'false');
  };


  render() {
    const { comment } = this.state;
    console.log(comment);
    const { post } = this.state;
    return (
      <>
      <Navigation onLogout={this.logoutHandler} />
      <section id="view-gig">
        {
          <React.Fragment>
          <div className="container">
            <div key={post._id} classame="">
              <h2>Title: {post.title}</h2>
              <p> {post.content}</p>
           

            </div>
            <div className="viewPostComment">
                <div className="comments">
                  <h2>Comments:</h2>
                  <CommentList data={comment}/>
                </div>
                <div className="comment-form">
                  <CommentForm sat={this.props} onSelectLanguage={this.handleChange}/>
                </div>
            </div>
          </div>
          </React.Fragment>
        }
      </section>
      </>
    );
  }
}

export default ViewPost;
