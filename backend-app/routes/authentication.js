let express = require('express');
let router = express.Router();
let querystring = require('querystring')
let secret = require('./../secrets/secret');
let Spotify = require('spotify-web-api-node');

let spotifyApi = new Spotify({
  clientId: secret.SPOTIFY_CLIENT_ID,
  clientSecret: secret.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI || "http://localhost:3001/callback"
});

let scopes = ["user-read-private", "user-read-email"];

router.get('/', function(req, res) {
    /* Note that state is used to maintain a value between the request and the
       callback to redirect_uri. Useful agains CSRF exploits according to the
       documentation */
    /* TODO: Make state a random sequence */
    let state = "123"
    res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

module.exports = router;
