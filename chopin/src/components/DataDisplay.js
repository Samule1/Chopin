import React, { Component } from 'react';
import './../App.css';

class DataDisplay extends Component {
  render() {
    console.log(this.props.data)
    return (
      <div>Here will be some data!</div>
    );
  }
}

export default DataDisplay;
