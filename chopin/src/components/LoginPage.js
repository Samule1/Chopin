import React, { Component } from 'react';
import './../App.css';
import { Login } from './Login'
import Background from '../images/login_bg.jpg';

/* Some very basic bootstrap layout settings */
let sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + Background + ")",
};

class LoginPage extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
              <Login/>
            </div>
        </div>
      </section>
    );
  }
}

export default LoginPage;
