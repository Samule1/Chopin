let db = require('./database.js')

//db.removeSubscriber("chrjo522@student.liu.se", "seth.hampus.carlsson@gmail.com")


//db.addSubscriber("chrjo522@student.liu.se", "jesus@himlen")
//db.addSubscriber("chrjo522@student.liu.se", "seth.hampus.carlsson@gmail.com")

//db.getSubscribers("chrjo522@student.liu.se").then(subs => console.log(JSON.stringify(subs, null,2)))

let x = {
    token : 'BQD8osJaWyrXFrAFFe6mQkJhOYCHi5rA02f9Zw9Ktb_56b8twLxze-KMosNIsC9pvFopfK2hB80t6iANi4nzlpXJal_GxKODitXa-8gqpIptsbg-emzxkevz1mG9BYBkAsRSzFh06AmhuRwlTDzZVz8JpwCWVOH6dg',
    name : 'My chill stuff',
    tracks: [
        'song that I like..',
        'Another song, Rillz zey03270'
    ]
}

//db.storeClustrer("christoffer.forsj@gmail.com", x.tracks, x.name)

//db.addSubscriberAndSubscribed("seth.hampus.carlsson@gmail.com", "christoffer.forsj@gmail.com")

//db.unsubscribe("seth.hampus.carlsson@gmail.com", "christoffer.forsj@gmail.com")

//db.deleteCluster('-LArTJw5bK7qLL0yQ56N')

db.search('b', 5)