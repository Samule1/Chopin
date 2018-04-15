let blobclusterformatter = function(clusterdata, tracks, nclusters){
    
    let output_stage_one = clusterdata.map(point => {
        point.name = ""
        point.size = point.similarity
        delete point.similarity
        return point
    })

    for(let i = 0; i < tracks.length; i++){
        output_stage_one[i].name = tracks[i]
    }

    let clusters = []
    for(let i = 0; i < nclusters; i++){

        let cluster = output_stage_one.filter(point => point.cluster == i)
        clusters.push(cluster)
    }
    

    let output = clusters.reduce((o, cluster)=>{
        c = {}
        c.name = "A happy little cluster"
        c.children = cluster
        
        o.push(c)
        return o
    },[])

    return output

}

exports.blobclusterformatter = blobclusterformatter

