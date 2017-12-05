const events 	= require('events');
const net		= require('net');
const channel 	= new events.EventEmitter();

channel.clients = {};
channel.subscription = {};
channel.on('join', function( id, client ) {
	this.clients[id] = client;
	this.subscription[id] = (senderId, message) => {
		if ( id != senderId) {
			this.clients[id].write(message);
		}
	};
	this.on('broadcast', this.subscription[id]);
})

const server = net.createServer(client => {
	const id = `${client.remoteAddress}:${client.remotePort}`;
	channel.emit('join', id, client);
	client.on('data', data => {
		data = data.toString();
		channel.emit('broadcast', id, data);
	})
})

server.listen(8888)