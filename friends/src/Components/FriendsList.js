import React, { Component } from 'react'
import Friend from './Friend';
import uuidv4 from 'uuid'


export default class FriendsList extends Component {
   

    
    render() {
        const { data } = this.props;
    return (
      <>
         {data.map( friendMap => <Friend data={friendMap} key={uuidv4()}/>)}
      </>
    )
  }
}
