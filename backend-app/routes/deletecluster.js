const usr_fetch = require('./../preprocessing/getSpotifyUsr')
const express = require('express');
const router = express.Router();
const db = require('./../global/database')

router.post('/', function(req, res, next) {
    
    let token = req.body.token;
    let pushkey = req.body.id;
    res.setHeader('Content-Type', 'application/json');

    usr_fetch(token).then(response =>{

        let subscriber = response.data.email
        return db.deleteCluster(pushkey)       
        
    })
    .then(() =>{
        res.status(201).end();
    })
    .catch(err =>{
        res.status(500).send({ error: JSON.stringify(err) })
    })
    
});

module.exports = router;
