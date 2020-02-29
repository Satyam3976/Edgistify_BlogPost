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
    }
  }
  componentDidMount() {
    // const { gigID } = this.props.location.state;
    let hash = this.props.location.hash;
    let gigID = hash.split('#')[1];
    axios.post('//localhost:3000/gigs/getOne', { gigID })
      .then(res => {
        this.setState({ gig: res.data.gig });
      })
    
      .catch(err => {
        console.log(err)
      })  
  }
  render() {
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
                  <CommentList data={DATA}/>
                </div>
                <div className="comment-form">
                  <CommentForm sat={this.props} />
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
