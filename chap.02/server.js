const http = require('http');


const server = http.createServer();

function handleRequest() {
	console.log('handled request')
}
server.on('request', handleRequest);

server.listen(3000, () => {
	console.log('server is on at 3000;')
})