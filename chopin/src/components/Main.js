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

class Main extends Component {
  render() {
    let mainDivStyle = {
        paddingTop: 70
      } 
    return (
        <div style={mainDivStyle}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/top' component={GetTop}/>
                <Route path='/playground' component={Playground}/>
            </Switch>
        </div>
    );
  }
}

export default Main;
