import React, { Component } from 'react';
import './../App.css';
import queryString from 'query-string'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginPage from './LoginPage'
import Cluster2D from './Cluster2D'
import Header from './Header'
import Home from './Home'
import GetTop from './GetTop'
import Playground from './Playground'
import IndividualRoute from './IndividualRoute'
import User from './User'

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
                <IndividualRoute exact path="/" component={User}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/user/top' component={GetTop}/>
                <Route path='/user/playground' component={Playground}/>
                <Route path='/user/:accessToken' component={User}/>
            </Switch>
        </div>
    );
  }
}

export default Main;
