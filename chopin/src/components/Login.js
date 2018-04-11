import React, { Component } from 'react';
import { actions } from './../actions/actions'
import './../App.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    }

    /* Bind local functions and onSubmit event handlers */
    this.submitLoginHandler = this.submitLoginHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  submitLoginHandler(event) {
    /* Don't use the ordinary submit event... */
    event.preventDefault();

    /*
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    */

    console.log("Dispatch: " + this.props);
    const username = this.state.username;
    const password = this.state.password;
    const dispatch = this.props;


    if (username && password) {
      //dispatch(actions.login(username, password));
    }
  }

  inputChangeHandler(event) {
    console.log("ipnutChangeHandler() event: " + event);
    const { name, value } = event.target;
        this.setState({ [name]: value });
  }

  render() {
    console.log(this.props.data)

    const username = this.state.username;
    const password = this.state.password;

    return (
      <div className="col-md-80 col-md-offset-10">
        <h1>Login</h1>
        <form name="login-form" onSubmit={this.submitLoginHandler}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" placeholder="Enter email" value={username} onChange={this.inputChangeHandler} />
            <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.inputChangeHandler} />
          </div>
          <div className="form-group">
              <button className="btn btn-primary">Login</button>
              <label to="/login" className="btn btn-link">Register</label>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
