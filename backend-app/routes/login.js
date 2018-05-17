let express = require('express');
let router = express.Router();
let querystring = require('querystring')
let secret = require('./../secrets/secret');

let redirect_uri =
  process.env.REDIRECT_URI ||
  'http://localhost:3001/callback'

router.get('/', function(req, res) {
    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: secret.SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email user-top-read',
      redirect_uri
    }))
  })

  module.exports = router;
