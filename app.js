/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes');
	http = require('http'),
	path = require('path'),
	app = express(),
	server = http.createServer(app),
	io = require('socket.io').listen(server/*, { log: false }*/),
	url = '127.0.0.1' || require('os').networkInterfaces().en1[1].address; // <-- insert IP or URL here, for socket to listen to

// all environments
app.set('port', process.env.PORT || 3000);
app.set('url', url);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);

server.listen(app.get('port'), function(){
	console.log('Express server listening on url %s:%s', app.get('url'), app.get('port'));
});
