'use strict';

var redis = require('redis'),
	client = redis.createClient(),
	channel = "MyChannel",
	msgCounter = 1,
	finalMessage = false;

var getMessage = function(finalMessage) {
	return {
		id: msgCounter++,
		data: Math.floor(Math.random() * 1000000).toString(),
		time: (new Date()).toLocaleTimeString(),
		final: finalMessage
	};
};

var publishMessage = function() {
	setTimeout(function() {
		if(finalMessage) {
			console.log('Final message sent. Quitting...');
			client.quit();
		}
		else {
			var message = getMessage(finalMessage);
			if(message.data % 5 == 0) {
				message.final = finalMessage = true;
			}
			client.publish(channel, JSON.stringify(message));
			console.log("[%s] published: %s, final=%s", message.time, message.data, message.final);
			publishMessage();
		}
	}, Math.floor(Math.random() * 10000));
};

publishMessage();