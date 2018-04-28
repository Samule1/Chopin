import React, { Component } from 'react'
import { deleteUserClusterFromList } from '../actions/profileActions';
import { deletingUserCluster } from '../actions/profileActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SavedCluster extends Component {

    constructor(props) {
        super(props);

        this.deleteSavedCluster = this.deleteSavedCluster.bind(this);
    }

    deleteSavedCluster() {
        this.props.deletingUserCluster();
        this.props.deleteUserClusterFromList(this.props.clusterId);   
    }

    render() {
        let deletingCluster = this.props.deletingCluster;

        let tracks = this.props.tracks.map(track => {
            return (<li>{track}</li>)
        })
        return (
            <div className="card">
                    <div className="card-header" id={this.props.id}>
                        <h5 className="mb-0">
                            <button className="btn btn-light" data-toggle="collapse" data-target={'#'+this.props.idx} aria-expanded="true" aria-controls={this.props.idx}>
                                {this.props.name}
                            </button>
                            {!deletingCluster && <button type="button" className="btn btn-secondary float-right" onClick={this.deleteSavedCluster}>Delete</button>}
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

SavedCluster.propTypes = {
    deleteUserClusterFromList: PropTypes.func.isRequired,
    deletingUserCluster: PropTypes.func.isRequired,
    deletingCluster: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    // This comes from our root reducer
    profile: state.profile.clusterDeleted,
    deletingCluster: state.profile.deletingCluster
});

export default connect(mapStateToProps, { deleteUserClusterFromList, deletingUserCluster })(SavedCluster);