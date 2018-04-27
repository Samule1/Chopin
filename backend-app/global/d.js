let db = require('./database.js')

//db.removeSubscriber("chrjo522@student.liu.se", "seth.hampus.carlsson@gmail.com")


//db.addSubscriber("chrjo522@student.liu.se", "jesus@himlen")
//db.addSubscriber("chrjo522@student.liu.se", "seth.hampus.carlsson@gmail.com")

db.getSubscribers("chrjo522@student.liu.se").then(subs => console.log(JSON.stringify(subs, null,2)))

