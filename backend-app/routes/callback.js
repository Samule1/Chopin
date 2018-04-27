let express = require('express');
let router = express.Router();
let secret = require('./../secrets/secret');
let request = require('request');

<<<<<<< HEAD
let redirect_uri = process.env.REDIRECT_URI || "http://localhost:3001/callback";
=======
let redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://192.168.0.101:3001/callback'
>>>>>>> be0c53c8a609913088230f1e2c8beb076efc890a

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
<<<<<<< HEAD
      let access_token = body.access_token;
      let uri = process.env.FRONTEND_URI || 'http://localhost:3000/'
      //res.redirect(uri + '?access_token=' + access_token)
      res.status(200).json({ access_token: access_token});
    });
    /*
    let code = req.query.code || null;
=======
      var access_token = body.access_token
      let uri = process.env.FRONTEND_URI || 'http://localhost:3000/user/'
      res.redirect(uri +  access_token)
    })
  })
>>>>>>> be0c53c8a609913088230f1e2c8beb076efc890a

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
