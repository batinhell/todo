var express = require('express');
var serveStatic = require('serve-static')
var app = express();

var port = 3000;

app.use(express.static('client'));
app.use('/bower', express.static('bower_components'));

app.all('/*', function(req, res, next) {
    res.sendFile('./client/index.html', { root: __dirname });
});

app.listen(port);

