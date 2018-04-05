let clean = function(data){
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

    return no_fuzz
}

exports.clean = clean
