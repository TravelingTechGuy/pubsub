##Redis + Socket.io + Express pub/sub example

###Install:

Once node and npm are installed, you can checkout the source and install the missing modules:

	$ git clone https://github.com/TravelingTechGuy/pubsub.git
	$ cd ./pubsub
	$ npm install

###Run the demo:
1. Make sure Redis is running: `$ redis-server <options-file>`
2. Start the app: `$ node app`
3. Browse to `localhost:3000`
4. Start the publish script: `$ node pub.js`

You should be now able to see the messages you're subscribed to in the browser, each showing time, and a random number.

###Flow:
 - Upon socket connection, the server subscribes to a Redis channel (sub.js)
 - The publishing script (pub.js) keeps publishing messages with random numbers, every 1-10 seconds
 - If the message number is divisible by 5, the message field `final` turns `true` (feel free to change the condition in pub.js)
 - Once the client notices it's the final message, it disconnects the socket
 - Upon socket disconnect, the server unsubscribes from the Redis channel
 - To restart the app, refresh the browser window, and run pub.js again