import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './Components/FriendsList';


class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

componentDidMount() {
    console.log("CDM now running");
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ data: res.data });
      })
      .catch(err => {});
  }


  render() {
    return (
      <>
        <FriendsList data={this.state.data}/>
      </>
    );
  }
}

export default App;
