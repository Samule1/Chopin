import React, { Component } from 'react'
import UserInfo from './UserInfo'

import ClusterList from './ClusterList'
import Header from './Header';
import Feed from './Feed'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Profile component</h1>
          <UserInfo />
          <ClusterList />
          <Feed/>
        </div>
      </div>
    )
  }
}