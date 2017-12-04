const http = require('http');
const fs 	= require('fs');


// refectering the code
http.createServer(( req, res ) => {
	getTitles(res);
}).listen(3000, () => {
	console.log('Server is on at port 3000.')
})


function getTitles( res ) {
	fs.readFile('./list.json', ( err, data ) =>{
		if ( err ) handleError( err, res );
		getTemplate( JSON.parse(data.toString()), res );
		
	})
}

function getTemplate( titles, res ) {
	fs.readFile('./index.html', ( err, data ) => {
		if ( err ) return handleError( err, res );
		formatHtml( titles, data.toString(), res );
	})
}

function formatHtml( titles, temp, res ) {
	const html = temp.replace('%', titles.join('</li><li>'));
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html);
};

function handleError( err, res ) {
	console.error(err);
	res.end('Server Error')
}

// http.createServer(( req, res ) => {
// 	if( req.url == '/') {
// 		fs.readFile('./list.json', ( err, data ) => {
// 			if( err ) {
// 				console.error(err);
// 				res.end('Server Error');
// 			} else {
// 				const titles = JSON.parse(data.toString());
// 				fs.readFile('./index.html', ( err, data ) => {
// 					if( err ) {
// 						console.error(err);
// 						res.end('Server Error');
// 					} else {
// 						const templ = data.toString();
// 						const html = templ.replace('%', titles.join('</li><li>'));
// 						res.writeHead(200, {'Content-Type': 'text/html'});
// 						res.end(html)
// 					}
// 				})
// 			}
// 		})
// 	}
// }).listen(3000)