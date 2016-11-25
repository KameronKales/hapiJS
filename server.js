'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
const request = require('request');

server.connection({ port: 3000 });

var plugins = [
    require('./plugins/hello'),
]

server.register(plugins, function(err) {
    if (err) {
        return console.error(err);
    }

    server.start(function() {
        console.log('Server Started')
    })
});
