let clean = function(data){

    return new Promise((resolve, reject) => {
        data = JSON.parse(data)
        let songs = data.audio_features
        let no_fuzz = songs.map(song => {
            delete song.type
            delete song.id
            delete song.uri
            delete song.track_href
            delete song.analysis_url
    
            return song
    
        })
        if(data) {resolve(no_fuzz)}
        else {reject(new Error('Somthing went wrong in feature cleaner..'))}

    })
    
}

exports.clean = clean
