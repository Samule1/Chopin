import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setToken } from '../actions/loginAction'
import PropTypes from 'prop-types';
import Header from './Header'

class User extends Component {
  
  componentDidMount() {
    console.log('User component mounted!')
    /* Dispatch actions for getting tokens */

    /* We get the acces token like this thanks to react-router-dom */
    let accessToken = this.props.match.params.accessToken;
    /* This redux action sets the token */
    this.props.setToken(accessToken);
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>User page</h1>
      </div>
    )
  }
}

User.propTypes = {
    setToken: PropTypes.func.isRequired,
}

export default connect(null, { setToken } )(User);
