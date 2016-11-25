var express = require('express');
var bodyparser = require('body-parser');

var cors = require('cors');


var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors(corsOptions));

var connection = require('./connection');
var routes = require('./routes');

connection.init();
routes.configure(app);
var server = app.listen(8000, function() {
    console.log('Server listening on port ' + server.address().port);
});

// config cors call api client
var corsOptions = {
    origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials:true
}