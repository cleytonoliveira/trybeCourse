import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    return <p>{this.props.user.name}</p>
  }
}

export default UserProfile;
