import React, { Component } from 'react'
import UserInfo from './UserInfo'

let centerStyle = {
    width: '100%',
    textAlign: 'center'
}

let formStyle = {
    display: 'inline-block'
}

export default class Search extends Component {
  render() {
    return (
        <div style = {centerStyle}>
            <form style = {formStyle}>
                <div>
                    <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term"/>
                </div>
            </form>
        </div>
    )
  }
}