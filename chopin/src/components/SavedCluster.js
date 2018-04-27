import React, { Component } from 'react'


export default class SavedCluster extends Component {
  render() {

    let tracks = this.props.tracks.map(track => {
        return (<li>{track}</li>)
    })
    return (
        <div className="card">
                <div className="card-header" id={this.props.id}>
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target={'#'+this.props.idx} aria-expanded="true" aria-controls={this.props.idx}>
                    {this.props.name}
                    </button>
                </h5>
                </div>

                <div id={this.props.idx} className="collapse show" aria-labelledby={this.props.id} data-parent="#accordion">
                <div className="card-body">
                    <ul>
                        {tracks}
                    </ul>
                </div>
                </div>
        </div>
    )
  }
}
