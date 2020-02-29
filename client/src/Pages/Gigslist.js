import React, { Component } from "react";
import axios from 'axios';
import "../styles/gigslist.css";
import { Link } from "react-router-dom";

class Gigs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gigs: [
        {
          Firstname: "Yash",
          Lastname: "Verma",
          task: "Get veggies",
          details: "Get 1kg cauliflower",
          pay: 20,
          location: "Kanpur",
          _id: 1
        }
      ]
    };
  }
  componentDidMount() {
    axios.get('//localhost:3000/gigs/allGigs')
      .then(res => {
        this.setState({ gigs: res.data.gigs });
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <section id="gig-cards-list">
        {this.state.gigs.map(function (e) {
          return (
            <div key={e._id} className="gig-card">
              <div className="postlist">
                <img src="https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                alt="Italian Trulli" className="postimg" />
                </div>
              <div>
                <h2>{e.title}</h2>
                <p>{e.desc}</p>
                <h4>Offer: {e.offer}</h4>
              </div>
              <div className="postlink">
              <Link to={`viewgig#${e._id}`}>View</Link>
              <button type="submit">Edit</button>
              <button type="submit">Delete</button>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Gigs;
