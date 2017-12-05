const express		= require('express');
const bodyParser	= require('body-parser');
const mongoose	= require('mongoose')
const {Article} = require('./models/article');

//const mongodb 	= require('mongodb');

const dbURL = 'mongodb://ahmed_soliman:abc123@ds129966.mlab.com:29966/later'
mongoose.connect(dbURL);

const app 	= express();
const articles = [{ title: 'Exmaple' }];

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
	let newArticle = new Article({
		title: req.body.title
	});

	newArticle.save()
		.then(
			( doc ) => {
				res.status(200).send({message: 'Saved', data: doc})
			}, 
			( err) => {
				res.status(400).send()
			})
		.catch((e) => {
			res.status(400).send()
		})
	
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