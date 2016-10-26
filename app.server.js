var express = require('express');
var serveStatic = require('serve-static')
var app = express();

var port = 3000;

// app.use(serveStatic(__dirname + '/bower_components'));
// app.use(serveStatic(__dirname + '/client'));
// app.use(serveStatic('/bower_components'));
// app.use(serveStatic('./client'));
app.use(express.static('client'));
app.use('/bower', express.static('bower_components'));
// app.use(express.static('bower_components'));

app.all('/*', function(req, res, next) {
    res.sendFile('./client/index.html', { root: __dirname });
});

app.listen(port);

