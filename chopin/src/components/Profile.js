import React, { Component } from 'react'
import UserInfo from './UserInfo'

import ClusterList from './ClusterList'
import Header from './Header';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Profile component</h1>
          <UserInfo />
          <ClusterList />
        </div>
      </div>
    )
  }
}