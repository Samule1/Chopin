import React, { Component } from 'react'
import UserInfo from './UserInfo'


export default class SavedCluster extends Component {
  render() {

    let tracks = this.props.tracks.map(track => {
        return (<li>{track}</li>)
    })
    return (
        <div class="card">
                <div class="card-header" id={this.props.id}>
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target={'#'+this.props.idx} aria-expanded="true" aria-controls={this.props.idx}>
                    {this.props.name}
                    </button>
                </h5>
                </div>

                <div id={this.props.idx} class="collapse show" aria-labelledby={this.props.id} data-parent="#accordion">
                <div class="card-body">
                    <ul>
                        {tracks}
                    </ul>
                </div>
                </div>
        </div>
    )
  }
}
