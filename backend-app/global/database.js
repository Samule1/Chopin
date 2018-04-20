let admin = require('firebase-admin');
let serviceAccount = require('./../secrets/dbCredentials.js')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://chopin-d6e38.firebaseio.com"
  });



const usrRef = admin.database().ref('/users')
const userSubRef = admin.database().ref('/users/subscribers')
const clusterRef = admin.database().ref('/clusters')


const data_api = {

    getUser: function(id){
        return usrRef.orderByChild("id").equalTo(id).once("value").then(snapshot =>{
            let res = []
            snapshot.forEach(element => {
                res.push(element.val())
            });
            
            return res[0]
        })
    },
    
    insertNewUser: function(id, name){

        return this.exists(id).then(exist =>{
            if(exist){
                throw new Error('User already exists!')
            }
            else{
                return usrRef.push({
                    id: id,
                    name: name, 
                })
            }
        })
        
    },

    exists: function(id){
        return this.getUser(id).then(result =>{
            return result.length != 0
        })
    },

    allUsers: function(){
        return usrRef.once("value").then(snapshot => {
            let res = []
            snapshot.forEach(element => {
                res.push(element.val())
            });
            
            return res
        })
    },

    getUserPushKey: function(id){
        return usrRef.orderByChild("id").equalTo(id).once("value")
            .then(snapshot =>{
                let res = []
                snapshot.forEach(element => {
                    res.push(element.key)
                });
            
                return res[0]
            })
    },

    addSubscriber: function(publisher, subscriber){
        
        return Promise.all([
            this.exists(publisher),
            this.exists(subscriber)
        ])
        .then(exist =>{

            if(!exist){
                throw new Error('User '+publisher+' not found!')
            }

            return this.getUserPushKey(publisher)
        })
        .then(key => {
            let subRef = admin.database().ref('/users/'+key+'/subscribers')
            subRef.push({
                id: subscriber
            })
        }) 
        
    },

    storeClustrer: function(owner, tracks, name){
        
        return clusterRef.push({
          owner: owner,
          tracks: tracks,
          name: name
        })
    },

    getCluster: function(owner){
        return clusterRef.orderByChild('owner').equalTo(owner).once("value")
            .then(snapshot =>{
                let res = []
                snapshot.forEach(element => {
                    res.push(element.val())
                });
            
                return res
            })
    } 
}

module.exports = data_api


