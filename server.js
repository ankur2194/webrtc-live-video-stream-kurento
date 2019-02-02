var path = require('path');
var url = require('url');
var express = require('express');
var minimist = require('minimist');
var https = require('http');

var argv = minimist(process.argv.slice(2), {
    default: {
        as_uri: 'http://localhost:8443/',
        ws_uri: 'ws://192.168.31.133:8888/kurento'
    }
});

var app = express();

/*
 * Server startup
 */
var asUrl = url.parse(argv.as_uri);
var port = asUrl.port;
var server = https.createServer(app).listen(port, () => {
    console.log('Open ' + url.format(asUrl) + ' with a WebRTC capable browser');
});

require('./multiChannel')(server);

app.use(express.static(path.join(__dirname, 'static')));
