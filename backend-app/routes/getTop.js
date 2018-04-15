let express = require('express');
let router = express.Router();
let spotify = require('spotify-web-api-node');
let request = require('request-promise-native');
let featurecleaner = require('./../preprocessing/cleanfeatures').clean
let blobclusterformatter = require('./../postprocessing/blobcluster.js').blobclusterformatter

let compose_multi_query = function(token, songs, api_url){

    return new Promise((resolve, reject) =>{
        let options = {
            url: api_url + songs.join(','),
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        if(options) resolve(options)
        else reject(new Error('failed to construct song-feature options'))
    })
}

let fetch_clusters = function(token, tracks, url, options_compute_api, k){

    return compose_multi_query(token, tracks, "https://api.spotify.com/v1/audio-features/?ids=")
    .then(request_options =>{
        return request(request_options)
    })
    .then(song_features =>{
        return featurecleaner(song_features)
    })
    .then(clean_songs =>{
        let obj = {
            data: clean_songs,
            k: k 
        }
        options_compute_api.body = obj
        return request(options_compute_api)
    })
    .then(clusters => clusters)

}

let fetch_tracks = function(request_options){
    return request(request_options).then(raw_tracks =>{
        let bodyJSON = JSON.parse(raw_tracks)
        return bodyJSON.items.map(track => track.id)
    })
}

let fetch_track_names = function(token, tracks, uri){

    return compose_multi_query(token, tracks, uri)
           .then(request_options => {
               return request(request_options)
           })
           .then(raw_tracks => {
                let tracks = JSON.parse(raw_tracks).tracks
                let names = tracks.map(track => track.name)
                return names
           })
    
}

router.get('/', (req, res, next) => {
    
    let token = req.query.token;
    let k = 10

    let options_spotify = {
        url: "https://api.spotify.com/v1/me/top/tracks?limit=50",
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    let options_compute_api = {
        url: process.env.COMPUTE_API || 'http://localhost:5000/smartcluster',
        method: 'POST',
        json: true

    }

    let audio_feature_uri = "https://api.spotify.com/v1/audio-features/?ids=";
    let track_name_uri = "https://api.spotify.com/v1/tracks/?ids="
   
    fetch_tracks(options_spotify).then(tracks => {
        
        return Promise.all([
            fetch_clusters(token, tracks, audio_feature_uri, options_compute_api, k),
            fetch_track_names(token, tracks, track_name_uri)

        ])
    })
    .then(cn =>  res.send(JSON.stringify(blobclusterformatter(cn[0], cn[1], k))))

});

module.exports = router;