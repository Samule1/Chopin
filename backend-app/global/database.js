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
            return result != undefined
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
        return this.getUserPushKey(publisher)
            .then(key => {
                let subRef = admin.database().ref('/users/'+key+'/subscribers')
                subRef.push({
                    id: subscriber
                })
            }) 
    },

    addSubscribed: function(publisher, subscriber){
        return this.getUserPushKey(subscriber)
            .then(key => {
                let subRef = admin.database().ref('/users/'+key+'/subscribed')
                subRef.push({
                    id: publisher
                })
            }) 
    },

    addSubscriberAndSubscribed: function(publisher, subscriber){
        
        return Promise.all([
            this.exists(publisher),
            this.exists(subscriber)
        ])
        .then(exist =>{

            if(!exist){
                throw new Error('User '+publisher+' not found!')
            }

            return Promise.all([

                this.addSubscriber(publisher, subscriber),
                this.addSubscribed(publisher, subscriber)
                  
            ])  
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
                    let output = element.val();
                    output.id = element.key
                    res.push(output)
                });
            
                return res
            })
    },

    deleteCluster: function(pushkey){
        return clusterRef.child(pushkey).remove()
    },
    
    removeSubscriber: function(publisher, subscriber){
       
        return this.getUserPushKey(publisher)
            .then(key =>{
                return admin.database().ref('/users/'+key+'/subscribers')
                .orderByChild('id')
                .equalTo(subscriber)
                .once('value')
        
            })
            .then(snapshot => {

                snapshot.forEach(item =>{
                    snapshot.ref.child(item.key).remove()
                })
                  
            })
    },

    removeSubscribed: function(publisher, subscriber){
        
        return this.getUserPushKey(subscriber)
            .then(key =>{
                return admin.database().ref('/users/'+key+'/subscribed')
                .orderByChild('id')
                .equalTo(publisher)
                .once('value')

            })
            .then(snapshot => {
                snapshot.forEach(item =>{
                    snapshot.ref.child(item.key).remove()
                })
            })
    },

    unsubscribe: function(publisher, subscriber){
        return Promise.all([
            this.exists(publisher),
            this.exists(subscriber)
        ])
        .then(exist =>{

            if(!exist){
                throw new Error('User '+publisher+' not found!')
            }

            return Promise.all([
                this.removeSubscriber(publisher, subscriber),
                this.removeSubscribed(publisher, subscriber)
            ])
        })
    },

    getSubscribers: function(publisher){

        return this.exists(publisher).then(exist => {
            return usrRef.orderByChild('id')
                .equalTo(publisher)
                .limitToFirst(1)
                .once('value')
        })
        .then(snapshot => {

            let key = Object.keys(snapshot.val())[0];
            return snapshot.child(key + '/subscribers')
        })
        .then(snapshot =>{
            let out = []
            snapshot.forEach(subscriber=>{
                out.push(subscriber.val().id)
            })

            return out
        })
        

    }
}

module.exports = data_api


