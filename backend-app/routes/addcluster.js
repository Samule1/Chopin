const usr_fetch = require('./../preprocessing/getSpotifyUsr')
const express = require('express');
const router = express.Router();
const db = require('./../global/database')

router.post('/', function(req, res, next) {
    
    let token = req.body.token;
    let name = req.body.name;
    let tracks = req.body.tracks;

    usr_fetch(token).then(response =>{
        
        let usr = response.data.email
        return db.storeClustrer(usr, tracks, name)
        
    })
    .then(dbcomplete =>{
        res.status(201).end();
    })
    .catch(err =>{
        console.log(err)
        res.status(500).send({ error: JSON.stringify(err) })
    })
    
    
});



module.exports = router;
