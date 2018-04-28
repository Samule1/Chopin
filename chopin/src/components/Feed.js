import React, { Component } from 'react'
import * as firebase from 'firebase'
import store from './../store'
import { ListGroup } from 'react-bootstrap';

const config = {
    apiKey: "AIzaSyD7sAHriC4gPZES2NZ35KuewAIgRrIUP8Q",
    authDomain: "chopin-d6e38.firebaseapp.com",
    databaseURL: "https://chopin-d6e38.firebaseio.com",
    projectId: "chopin-d6e38",
    storageBucket: "chopin-d6e38.appspot.com",
    messagingSenderId: "270661395851"
  };

const listGroupStyle = {
    width: "50%",
};

export default class Feed extends Component {

    constructor(props){
        
        super(props)

        if(!firebase.apps.length){
              
            firebase.initializeApp(config)
        }

        this.state = {
            content: []
        }

        this.updateFeed = this.updateFeed.bind(this)


    }

    updateFeed(data){
        this.setState({ 
            content: this.state.content.concat([data.val().message])
          })
    }

    componentWillMount(){
        let accessToken = store.getState().login.accessToken;
        fetch('/usr/db/token?token='+accessToken)
        .then(res => res.json())
        .then(data => {
            return firebase.auth().signInWithCustomToken(data.dbToken)
        })
        .then(() =>{
            return firebase.database().ref('/users/'+firebase.auth().currentUser.uid +'/messages').limitToLast(10).on('child_added', this.updateFeed)
        })
        .catch(err => console.log(err.message))
        
    }

    render() {
        let feedItems = this.state.content.map(item => {
            return (<li className="list-group-item">{item}</li>)
        })
        return (
            <div style={ listGroupStyle }>
                <ListGroup componentClass="ul">
                    {feedItems}
                </ListGroup>
            </div>
        )
    }
}