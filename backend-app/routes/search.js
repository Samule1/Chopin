const usr_fetch = require('./../preprocessing/getSpotifyUsr')
const express = require('express');
const router = express.Router();
const db = require('./../global/database')

router.get('/', function(req, res, next) {
    
    let token = req.query.token;
    let query = req.query.query;

    res.setHeader('Content-Type', 'application/json');

    usr_fetch(token).then(response =>{

        return db.search(query, 10)        
        
    })
    .then(results => {
        console.log(JSON.stringify(results, null,2))
        res.send(JSON.stringify(results))
    })
    .catch(err =>{
        console.log(err)
        res.status(500).send({ error: JSON.stringify(err) })
    })
    
});

module.exports = router;