import React, { Component } from 'react'
import UserInfo from './UserInfo'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile component</h1>
        <UserInfo />
      </div>
    )
  }
}
