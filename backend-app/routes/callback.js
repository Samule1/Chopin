let express = require('express');
let router = express.Router();
let secret = require('./../secrets/secret');
let request = require('request');

let redirect_uri = process.env.REDIRECT_URI || "http://localhost:3001/callback";

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
      let access_token = body.access_token;
      let uri = process.env.FRONTEND_URI || 'http://localhost:3000/'
      console.log("access_token: " + access_token);
      res.redirect(uri + '?access_token=' + access_token)
      //res.status(200).json({ access_token: access_token});
      //res.send(JSON.stringify({ access_token: access_token}))
    });
    /*
    let code = req.query.code || null;

    spotifyApi.authorizationCodeGrant(code).then(data => {
      console.log("authorizationCodeGrant success!!!");
      let expires_in = data.body.expires_in;
      let access_token = data.body.access_token;
      let refresh_token = data.body.refresh_token;

      res.redirect(uri + '?access_token=' + access_token);
    }).catch(error => {
      res.redirect("authorizationCodeGrant failed")
    });
    */
});

module.exports = router;
