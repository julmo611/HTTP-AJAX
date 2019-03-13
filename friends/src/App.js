import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './Components/FriendsList';
import InputFriend from './Components/InputFriend';
import UpdateFriend from './Components/UpdateFriend';


class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
     
    };
  
  }
  

componentDidUpdate() {
  this.upFriend();
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


  addFriend = (name, age, email ) => {
    console.log(this.addFriend);
    axios.post(`http://localhost:5000/friends`, {name, age, email})
     .then(res => {this.setState({ data: res.data })} )
     .catch(err => {})
}

delFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ data:[...this.state.data.filter(data => data.id !== id)]}))
      .catch(err => {console.log(err.data)});
    
}


upFriend = (id, name, age, email )  => {
  console.log(this.upFriend);
  axios.put(`http://localhost:5000/friends/${id}`, {name, age, email})
   .then(res =>  {this.setState({ data: res.data })} )
   .catch(err => {console.log(err)})
}


  render() {
    return (
      <div className="main-container">
        <InputFriend addFriend={this.addFriend}/>
        <UpdateFriend upFriend={this.upFriend} />
        <FriendsList data={this.state.data} value={this.state.value} delFriend={this.delFriend} upFriend={this.upFriend} />

      </div>
    );
  }
}

export default App;
