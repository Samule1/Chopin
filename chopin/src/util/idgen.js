let lastid = 0;

let next_id = function(){
    return lastid++
}

module.exports = next_id

