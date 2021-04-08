var express = require('express');
var socket = require('socket.io');
require('dotenv').config();
var app = express();
var server = app.listen(process.env.PORT, function () {
    console.log("Listening on PORT " + process.env.PORT);
});
app.use(express.static('public'));
var upgradedServer = socket(server);
upgradedServer.on('connection', function (socket) {
    console.log('websocket connected', socket.id);
});
