const usr_fetch = require('./../preprocessing/getSpotifyUsr')
const express = require('express');
const router = express.Router();
const db = require('./../global/database')

router.get('/', function(req, res, next) {
    
    let token = req.body.token;
    let query = req.body.query;
    res.setHeader('Content-Type', 'application/json');

    usr_fetch(token).then(response =>{

        return db.search(query)        
        
    })
    .then(results => {
        res.send(JSON.stringify(results))
    })
    .catch(err =>{
        res.status(500).send({ error: JSON.stringify(err) })
    })
    
});

module.exports = router;