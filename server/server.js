'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var db = require('./db.js');


app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/../node_modules"));

require('./middleware/middleware.js')(app, express);

app.listen(port);
console.log('Server listening on ' + port);
