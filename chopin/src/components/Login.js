import React, { Component } from 'react';
//import { actions } from './../actions/actions'
import './../App.css';
import { connect } from 'react-redux'
import { login } from '../actions/loginAction';
import PropTypes from 'prop-types';
import LoginButton from '../images/login_spotify.png';

let buttonStyle = "buttonStyle";

class Login extends Component {
  render() {
    return (
      <div>
          <button className = { buttonStyle }>
            <a href="http://192.168.0.101:3001/login">
              <img src={ LoginButton }/>
            </a>
          </button>
      </div>
    );
  }
}

/*
Login.propTypes = {
  login: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log("mapStateToProps(state)");
  // Comes from our reducer
  return {
    login: state.login.success
  }
}
*/
/* Connect our decoupled component */
/*
const connectedLogin = connect(mapStateToProps, { login } )(Login);
export { connectedLogin as Login };
*/
export default Login;