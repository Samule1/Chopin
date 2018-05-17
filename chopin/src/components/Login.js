import React, { Component } from 'react';
//import { actions } from './../actions/actions'
import './../App.css';
import LoginButton from '../images/login_spotify.png';

let buttonStyle = "buttonStyle";

class Login extends Component {
  render() {
    return (
      <div>
          <button className = { buttonStyle }>
            <a href="http://localhost:3001/login">
              <img src={ LoginButton } alt="Login"/>
            </a>
          </button>
      </div>
    );
  }
}

export default Login;