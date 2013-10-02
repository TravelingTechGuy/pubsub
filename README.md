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