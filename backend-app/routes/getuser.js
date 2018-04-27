const usr_fetch = require('./../preprocessing/getSpotifyUsr')
const express = require('express');
const router = express.Router();
const db = require('./../global/database')

router.get('/', function(req, res, next) {
    
    let token = req.query.token;
    let usr = req.query.usr;
    res.setHeader('Content-Type', 'application/json');

    usr_fetch(token).then(response =>{

        return db.getUser(usr)        
        
    })
    .then(db_usr => {
        res.send(JSON.stringify(db_usr))
    })
    .catch(err =>{
        res.status(500).send({ error: JSON.stringify(err) })
    })
    
});

module.exports = router;
