let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ content:[
        {a:1},
        {b:2}
    ] }));
});

module.exports = router;
