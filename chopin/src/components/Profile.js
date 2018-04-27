import React, { Component } from 'react'
import UserInfo from './UserInfo'

import ClusterList from './ClusterList'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile component</h1>
        <UserInfo />
        <ClusterList />
      </div>
    )
  }
}
