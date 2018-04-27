import React, { Component } from 'react'
import UserInfo from './UserInfo'
import store from '../store'
import NextId from './../util/idgen'

import SavedCluster from './SavedCluster'

let containerStyle = {
    width: '15%'
}



export default class ClusterList extends Component {

    constructor(props){
        super(props)

        this.state = {
            clusters: []
        }
    }

    componentWillMount(){
        let token = store.getState().login.accessToken;
        fetch('/usr/clusters?token=' + token )
        .then(res => res.json())
        .then(data => this.setState({clusters: data}))
    }
    render() {
        let id = NextId();
        let idx = NextId();
        let clusters = this.state.clusters.map(cluster =>{
            return <SavedCluster name = {cluster.name} tracks = {cluster.tracks} id = {id++} idx = {idx++}/>
        })
        return (
            <div id="accordion" style = {containerStyle}>
                {clusters}
            </div>
        )
    }
}
