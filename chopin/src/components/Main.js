import React, { Component } from 'react';
import './../App.css';
import { Route, Switch } from 'react-router-dom'

import LoginPage from './LoginPage'
import GetTop from './GetTop'
import Playground from './Playground'
import IndividualRoute from './IndividualRoute'
import UserMain from './UserMain'
import Profile from './Profile'

let mainDivStyle = {
  flex: 1,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}

//<IndividualRoute exact path="/" component={User}/>

class Main extends Component {
  render() {
    return (
        <div style={mainDivStyle}>
            <Switch>
                <IndividualRoute exact path="/" component={UserMain}/>
                <IndividualRoute exact path="/user" component={UserMain}/>
                <IndividualRoute path="/user/profile" component={Profile}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/user/top' component={GetTop}/>
                <Route path='/user/playground' component={Playground}/>
                <Route path='/user/:accessToken' component={UserMain}/>
            </Switch>
        </div>
    );
  }
}

export default Main;
