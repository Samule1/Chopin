let express = require('express');
let router = express.Router();
let spotify = require('spotify-web-api-node');
let request = require('request');

const fs = require('fs');

let getAnlysis = function(token, songs){
    
    let options = {
        url: "https://api.spotify.com/v1/audio-features/?ids="+songs.join(','),
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    request(options, (err, response, body)=>{
        if(!err){
            fs.writeFile('audiofeatures.txt', body, (err) => {  
                if (err) throw err;
                console.log(body)
                console.log('Wrote data to file successfully!');
            });
        }

    })
}

router.get('/', (req, res, next) => {
    
    let token = req.query.token;
    let options = {
        url: "https://api.spotify.com/v1/me/top/tracks?limit=50",
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    request(options, (err, response, body)=>{
        if(!err){
            let bodyJSON = JSON.parse(body)
            let tracks = bodyJSON.items.map(track => track.id)
            getAnlysis(token, tracks)
            
            res.send(JSON.stringify(tracks))
        }

    })
    

});

module.exports = router;