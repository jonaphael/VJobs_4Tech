
/* requires */
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const consign = require('consign');

/* app */
server.use(bodyParser.urlencoded({ extended : false }));
server.use(bodyParser.json());

consign()
    .include('./routes')
    .into(server)

/* home */
server.get('/', async(req, res) => res.redirect('http://localhost:3000/vjobs'));

module.exports = server;