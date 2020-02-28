import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class CommentForm extends React.Component {
  state = {
    text: '',
    err: ''
  }

  handleChange = (e) => {
    console.log('po'+ e.target.value);
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let hash = this.props.sat.location.hash;
    let gigID = hash.split('#')[1];
    console.log('satyam' + gigID)

    let userId = localStorage.getItem('userID');
    console.log(userId)

    console.log(this.props.sat)
    console.log(userId);
    console.log(gigID)

    const { text } = this.state;
    if (!text) {
      this.setState({ err: 'Please check your inputs' });
      return;
    }
    axios.post('/addComment', {
      userId,
      gigID,
      text
    })
    .then(res => {
      console.log('satyam67')
    })
    .catch(err => console.error('chutiya'));
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="text"
          placeholder="Say something..."
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
        <h2>{this.state.err}</h2>
      </form>
    );
  }
}

export default CommentForm;




