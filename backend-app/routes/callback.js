let express = require('express');
let router = express.Router();
let secret = require('./../secrets/secret');
let request = require('request');

let redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:3001/callback'

router.get('/', function(req, res) {
    let code = req.query.code || null
    let authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(
          secret.SPOTIFY_CLIENT_ID + ':' + secret.SPOTIFY_CLIENT_SECRET
        ).toString('base64'))
      },
      json: true
    }
    request.post(authOptions, function(error, response, body) {
      var access_token = body.access_token
      let uri = process.env.FRONTEND_URI || 'http://localhost:3000/playground'
      res.redirect(uri + '?access_token=' + access_token)
    })
  })

  module.exports = router;
