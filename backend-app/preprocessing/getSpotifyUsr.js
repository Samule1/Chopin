let request = require('request-promise-native');

let _include_headers = function(body, response, resolveWithFullResponse) {
    return {'headers': response.headers, 'data': body, 'status': response.statusCode};
  };

let fetch_usr = function(token){

    let options_spotify = {
        url: "https://api.spotify.com/v1/me",
        headers: {
            'Authorization': 'Bearer ' + token
        },
        transform: _include_headers,
        json: true
    }
    
    
    return request(options_spotify).then(res => {
        
        if(res.status == 200){

            return res
        }

        else{
            
            throw new Error('Failed to authenticate user with spotify token')
        }

    })

}

module.exports = fetch_usr