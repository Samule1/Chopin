const usr_fetch = require('./../preprocessing/getSpotifyUsr')
const express = require('express');
const router = express.Router();
const db = require('./../global/database')

router.post('/', function(req, res, next) {
    
    let token = req.body.token;
    let publisher = req.body.usr;
    res.setHeader('Content-Type', 'application/json');

    usr_fetch(token).then(response =>{

        let subscriber = response.data.email
        return db.unsubscribe(publisher, subscriber)       
        
    })
    .then(() =>{
        res.status(201).end();
    })
    .catch(err =>{
        res.status(500).send({ error: JSON.stringify(err) })
    })
    
});

module.exports = router;
