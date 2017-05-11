const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3090;

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@dbh36.mlab.com:27367/node`);

app.use(morgan('combined'));
app.use(cors());
// parse all incoming requests as JSON
app.use(bodyParser.json({ type: '*/*' }));
app.use('/', router);

app.listen(port, function() {
    console.log('App listening on', port);
});