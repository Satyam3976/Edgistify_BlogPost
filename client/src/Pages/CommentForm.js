import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class CommentForm extends React.Component {
  state = {
    text: '',
    err: ''
  }

  handleClear = e => {
    // e.preventDefault();
    this.setState({[e.target.name]: ''})
  }

  handleChange = (e) => {
    var el = document.getElementById('submitbtnid');
    if(e.target.value===''?el.style.display= "none":el.style.display= "block")
    console.log('po'+ e.target.value);
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    
    e.preventDefault()

    let hash = this.props.sat.location.hash;
    let postId = hash.split('#')[1];
    console.log('satyam' + postId)

    let userId = localStorage.getItem('userID');
    console.log(userId)

    console.log(this.props.sat)
    console.log(userId);
    console.log(postId)

    const { text } = this.state;
    if (!text) {
      this.setState({ err: 'Please check your inputs' });
      return;
    }
    axios.post('/addComment', {
      userId,
      postId,
      text
    })
    .then(res => {
      console.log(res)
      console.log('satyam67')
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <form className="submitForm">
        <input
          type="text"
          name="text"
          value={this.state.text}
          placeholder="Want to Post Something"
          onChange={this.handleChange}
        />
        <button type="submit" id="submitbtnid" onClick={this.handleSubmit}>Submit</button>
        <button type="submit" onClick={this.handleClear}>Cancel</button>
        <h2>{this.state.err}</h2>
      </form>
    );
  }
}

export default CommentForm;




