var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = require('./router');

var app = express();
var port = process.env.PORT || 3090;

app.use(morgan('combined'));
// parse all incoming requests as JSON
app.use(bodyParser.json({ type: '*/*' }));
app.use('/', router);

app.listen(port, function() {
    console.log('App listening on', port);
});