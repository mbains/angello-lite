/*jslint node: true */
'use strict';
var express = require('express'),
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/employees', routes.get);
app.get('/api/employees/:id', routes.getById);
app.post('/api/employees', routes.post);
app.put('/api/employees/:id', routes.put);
app.delete('/api/employees/:id', routes.delete);

app.use(function (req, res) {
    res.json({'ok': false, 'status': '404'});
});

module.exports = app;
