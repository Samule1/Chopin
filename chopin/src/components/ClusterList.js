import React, { Component } from 'react'
import store from '../store'
import NextId from './../util/idgen'

import SavedCluster from './SavedCluster'
import { fetchUserClusterList } from '../actions/profileActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ClusterList extends Component {

    constructor(props){
        super(props)

        this.state = {
            clusters: []
        }

        store.subscribe(() => {
            let data = store.getState().profile.clusterListData;
            if (data) {
                this.setState({ clusters: data });
            }
         });
    }

    componentWillMount(){
        this.props.fetchUserClusterList();
    }
    render() {
        let id = NextId();
        let idx = NextId();
        let clusters = this.state.clusters.map(cluster =>{
            return <SavedCluster name = {cluster.name} tracks = {cluster.tracks} id = {id++} idx = {idx++}/>
        })
        return (
            <div id="accordion">
                {clusters}
            </div>
        )
    }
}

ClusterList.propTypes = {
    fetchUserClusterList: PropTypes.func.isRequired,
    clusterListData: PropTypes.array
}

const mapStateToProps = state => {
    // This comes from our root reducer
    return {
        profile: state.profile.clusterListData
    }
}

export default connect(mapStateToProps, { fetchUserClusterList } )(ClusterList);