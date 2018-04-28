import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setToken } from '../actions/loginAction'
import PropTypes from 'prop-types';
import Header from './Header'
import Feed from './Feed';

const containerStyle = {
  paddingTop: "76px",
};

class UserMain extends Component {
  
  componentDidMount() {
    console.log('User component mounted!')
    /* Dispatch actions for getting tokens */

    /* We get the acces token like this thanks to react-router-dom */
    let accessToken = this.props.match.params.accessToken;
    /* Protect the token in the default route */
    if (accessToken != null) {
      /* This redux action sets the token */
      this.props.setToken(accessToken);
      this.props.history.push('/user');
    }
  }

  render() {
    console.log("Render UserMain");
    return (
      <div>
        <Header/>
          <div className="container" style={ containerStyle }>
            <div className="row justify-content-md-center">
              <Feed />
            </div>
          </div>
      </div>
    )
  }
}

UserMain.propTypes = {
    setToken: PropTypes.func.isRequired,
}

export default connect(null, { setToken } )(UserMain);
