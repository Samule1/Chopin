let express = require('express');
let router = express.Router();
let spotify = require('spotify-web-api-node');
let request = require('request');
let rp = require('request-promise-native');
let featurecleaner = require('./../preprocessing/cleanfeatures').clean

let compose_feature_query = function(token, songs){

    return new Promise((resolve, reject) =>{
        let options = {
            url: "https://api.spotify.com/v1/audio-features/?ids="+songs.join(','),
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        if(options) resolve(options)
        else reject(new Error('failed to construct song-feature options'))
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
    
    rp(options).then((body) =>{
        let bodyJSON = JSON.parse(body)
        let tracks = bodyJSON.items.map(track => track.id)
        return compose_feature_query(token, tracks)
    })
    .then((feture_options) =>{
        return rp(feture_options)
    })
    .then((feture_body) =>{
        let songs = feture_body
        console.log(featurecleaner(songs))
    })
    

});

module.exports = router;