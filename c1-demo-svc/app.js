var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    routes = require('./routes'),
    cors = require('cors');

require("trend_app_protect");

var app = express();

//app.use(require('./middleware/client-url'));

var corsOptions = {
  origin: 'http://3.129.164.225',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));

app.use(bodyParser.json({ type: [ 'json', '+json' ] }));

/*// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
}); */

app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = express.Router();

router.use('/login', routes.login);
router.use('/cmd', routes.cmd);
router.use('/upload', routes.upload)
router.use('/ticker', routes.ticker)

app.use(router);

app.use(function(req,res) {
    return res.status(404).end();
});

module.exports = app;
