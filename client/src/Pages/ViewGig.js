import React from "react";
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './CommentBox.css';
import DATA from './data';

class ViewGig extends React.Component {
  state = {
    gig: {
      title: '',
      desc: '',
      offer: '',
      _id: '',
      deadline: '',
      negotiable: ''
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
      let gigID = hash.split('#')[1];
      axios.post('//localhost:3000/gigs/getOne', { gigID })
        .then(res => {
          console.log(res);
          this.setState({ gig: res.data.gig });
          this.setState({comment: res.data.comment});
        })
      
        .catch(err => {
          console.log(err)
        })  
  }
  componentDidMount() {
    // const { gigID } = this.props.location.state;
    let hash = this.props.location.hash;
    let gigID = hash.split('#')[1];
    axios.post('//localhost:3000/gigs/getOne', { gigID })
      .then(res => {
        console.log(res);
        this.setState({ gig: res.data.gig });
        this.setState({comment: res.data.comment});
      })
    
      .catch(err => {
        console.log(err)
      })  
  }
  render() {
    const { comment } = this.state;
    console.log(comment);
    const { gig } = this.state;
    return (
      <section id="view-gig">
        {
          <React.Fragment>
          <div className="container">
            <div key={gig._id} classame="gig-card">
              <h2>Title: {gig.title}</h2>
              <p>Description: {gig.desc}</p>
              <p>Offer: {gig.offer}</p>
              <p>Negotiable: {gig.negotiable ? 'Yes' : 'No'}</p>
              <p>DeadLine: {gig.deadline}</p>
            </div>
            <div>
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
    );
  }
}

export default ViewGig;
