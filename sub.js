'use strict';

module.exports = function(io, listenToChannel) {
	var redis = require('redis'),
		client = redis.createClient();

	io.sockets.on('connection', function (socket) {
		socket.on('disconnect', function() {
			console.log('Final message received. Unsubscribing...');
			client.unsubscribe();
		});
		
		client.on('message', function (channel, message) {
			message = JSON.parse(message);
			console.log('message recived on channel %s: %s', channel, message)
			socket.emit('message', message);
		});

		client.on('subscribe', function (channel, count) {
			console.log('Subscribed to channel %s', channel);
		});

		client.on('unsubscribe', function (channel, count) {
			console.log('Unsubscribed from channel %s. Quitting...', channel);
			client.quit();
		});

		client.subscribe(listenToChannel);
	});
};
