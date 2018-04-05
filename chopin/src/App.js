import React, { Component } from 'react';
import './App.css';
import queryString from 'query-string'
import Login from './components/Login'
import Cluster2D from './components/Cluster2D'


class App extends Component {

  componentDidMount(){

    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    if (!accessToken)
      return;
    console.log(accessToken)
    fetch('http://localhost:3001/top?token='+accessToken)
      .then(response => response.json())
      .then(responseJSON => console.log(responseJSON))

  }
  render() {
    let d = ["hej"]
    return (
      <div className="App">
        <header>TDDD27 Project</header>
        <Login data = {d} />
        <svg width="900" height="450">
            <Cluster2D width={900} height={450}/>
        </svg>
      </div>
    );
  }
}

export default App;
