import React, { Component } from 'react';
import { actions } from './../actions/actions'
import './../App.css';
import { connect } from 'react-redux'
import LoginButton from '../images/login_spotify.png';

let buttonStyle = "buttonStyle";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    }

    /* Bind local functions and onSubmit event handlers */
    this.loginHandler = this.loginHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  loginHandler(event) {
    /* Don't use the ordinary login event... */
    event.preventDefault();
    /*
    this.setState({ submitted: true });
    const { username, password } = this.state;
    */

    console.log("Dispatch: " + typeof dispatch);
    const username = this.state.username;
    const password = this.state.password;

    this.props.dispatch(actions.login());
  }

  inputChangeHandler(event) {
    console.log("inputChangeHandler() event: " + event);
    const { name, value } = event.target;
        this.setState({ [name]: value });
  }

  render() {
    const username = this.state.username;
    const password = this.state.password;
    const signing_in = this.props.signing_in;

    return (
      <div>
          <a href="http://localhost:3001/login" className = { buttonStyle }>
            <img src={ LoginButton }/>
          </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps(state)");
  const signing_in = state.signing_in;
  return {
      signing_in
  };
}
/* Connect our decoupled component */
const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login };
