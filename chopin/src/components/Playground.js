import React, { Component } from 'react';
import './../App.css';
import queryString from 'query-string'
import Circle from './Circle'


class Playground extends Component {


  render() {
    
    return (
      <div className="playground"> 
          <svg width="960" height="960">
              <Circle width={900} height={450}/>
          </svg>
      </div>
    );
  }
}

export default Playground;
