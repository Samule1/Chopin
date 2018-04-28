const usr_fetch = require('./../preprocessing/getSpotifyUsr')
const express = require('express');
const router = express.Router();
const db = require('./../global/database')

router.get('/', function(req, res, next) {
    
    let token = req.query.token;
    res.setHeader('Content-Type', 'application/json');

    usr_fetch(token).then(response =>{

        return db.getCustomToken(response.data.email)        
        
    })
    .then(token => {
        res.send(JSON.stringify({dbToken: token}))
    })
    .catch(err =>{
        res.status(500).send({ error: JSON.stringify(err) })
    })
    
});

module.exports = router;