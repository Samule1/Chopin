let express = require('express');
let router = express.Router();
let spotify = require('spotify-web-api-node');
let request = require('request');

/* GET home page. */
router.get('/', (req, res, next) => {
    
    let token = req.query.token;
    let options = {
        url: "https://api.spotify.com/v1/me/top/artists",
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    request(options, (err, response, body)=>{
        if(!err){
            res.send(JSON.stringify(body))
        }

    })
    

});

module.exports = router;