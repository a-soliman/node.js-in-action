const connect	= require('connect');

function logger( req, res, next ) {
	console.log('%s %s', req.method, req.url);
	next();
}

function hello( req, res ) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('hello world!')
}

// app.use( req, res, next ) => {
// 	res.send('Hello world.')
// };
connect()
	.use(logger)
	.use(hello)
	.listen(3000);