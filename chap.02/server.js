const http = require('http');
const fs 	= require('fs');


http.createServer(( req, res ) => {
	if( req.url == '/') {
		fs.readFile('./list.json', ( err, data ) => {
			if( err ) {
				console.error(err);
				res.end('Server Error');
			} else {
				const titles = JSON.parse(data.toString());
				fs.readFile('./index.html', ( err, data ) => {
					if( err ) {
						console.error(err);
						res.end('Server Error');
					} else {
						const templ = data.toString();
						const html = templ.replace('%', titles.join('</li><li>'));
						res.writeHead(200, {'Content-Type': 'text/html'});
						res.end(html)
					}
				})
			}
		})
	}
}).listen(3000)