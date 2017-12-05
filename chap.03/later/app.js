const express		= require('express');

const app 	= express();
const articles = [{ title: 'Exmaple' }];

app.set('port', process.env.PORT || 3000);


// GET ARTICLES
app.get ('/articles', ( req, res, next) => {
	res.send(articles);
});

// GET ARTICLE
app.get('/articles/:id', ( req, res, next ) => {
	let id = req.param.id;
	console.log('fitching: ', id);
	res.send(articles[id]);
});

// POST ARTICLE
app.post('/articles', ( req, res ) => {
	res.send('Save an article');
});

// DELETE ARTICLE
app.delete('/articles/:id', ( req, res ) => {
	let id = req.param.id;
	console.log('Deleting: ', id);
	delete articles[id];
	res.send({ message: 'Deleted' });
});


app.listen(app.get('port'), () => {
	console.log(`Express web app is avialable at ` + app.get('port'));
})

module.exports = app;