const usr_fetch = require('./../preprocessing/getSpotifyUsr')
const express = require('express');
const router = express.Router();
const db = require('./../global/database')

router.get('/', function(req, res, next) {
    
    let token = req.query.token;
    res.setHeader('Content-Type', 'application/json');

    usr_fetch(token).then(response =>{

        return db.getCluster(response.data.email)        
        
    })
    .then(clusters => {
        res.send(JSON.stringify(clusters))
    })
    .catch(err =>{
        res.status(500).send({ error: JSON.stringify(err) })
    })
    
});

module.exports = router;
