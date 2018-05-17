import React, { Component } from 'react';
import './../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../store'
import { saveCluster } from '../actions/graphActions';

export class SaveSelectedCluster extends Component {

  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      value: ''
    }

    store.subscribe(() => {
      let songs = store.getState().graph.selectedClusterItems;
      if (songs) {
          this.setState({songs: songs})
      }
   });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value && this.state.songs) {
      let accessToken = store.getState().login.accessToken;

      fetch('/usr/add/cluster', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({
              token: accessToken, 
              name: this.state.value,
              tracks: this.state.songs
          })
      });
    }
    this.setState({
      songs: [],
      value: ''
    });
  }

  render() {
    console.log("Rendering SaveClusterModal!");
    let songsToRender = this.state.songs.map(song => {
      return (<li>{song}</li>)
    })
    return (
      <div>
        <ul>
          {songsToRender}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label> Cluster name: 
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Save" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}

SaveSelectedCluster.propTypes = {
  saveCluster: PropTypes.func.isRequired,
  clusterItems: PropTypes.array
}

const mapStateToProps = state => ({
  // This comes from our root reducer
  //search: state.search.foundUsers,
  clusterItems: state.graph.selectedClusterItems
});

export default connect(mapStateToProps, { saveCluster } )(SaveSelectedCluster);