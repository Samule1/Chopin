import React, { Component } from 'react';
import './../App.css';
import Circle from './Circle'
import Header from './Header'
import { SaveSelectedCluster } from './SaveSelectedCluster';

class Playground extends Component {


  render() {
    
    return (
      <div>
        <Header />
        <div className="playground"> 
            <svg width="960" height="960">
                <Circle width={900} height={450}/>
            </svg>
        </div>
        <SaveSelectedCluster/>
      </div>
    );
  }
}

export default Playground;
