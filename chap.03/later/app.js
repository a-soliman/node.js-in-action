const express		= require('express');
const bodyParser	= require('body-parser');
const { ObjectID } 	= require('mongodb')
const { mongoose }	= require('./db/mongoose');

const {Article} = require('./models/article');

const app 	= express();
const articles = [{ title: 'Exmaple' }];

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


function isValidId(id) {
	if( !ObjectID.isValid(id) ) {
		return false;
	}
	return true;
};


// GET ARTICLES
app.get('/articles', ( req, res, next) => {
	Article.find()
		.then(
			(articles) => {
			res.status(200).send({ articles });
			}, 
			( err ) => {
				res.status(404).send('Unable to fich articles')
			})
});

// GET ARTICLE
app.get('/articles/:id', ( req, res, next ) => {
	let id = req.params.id;
	

	if( !ObjectID.isValid(id)) {
		res.status(404).send('Invalid Id.')
	}
	else {
		Article.findById(id)
			.then(
				( doc) => {
					res.status(200).send({ doc })
				},
				( err ) => {
					res.status(404).send('unable to fine article')
				})
	}
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
	let id = req.params.id;

	if( !isValidId(id) ) {
		res.status(400).send('Invalid Id');
	}
	
	Article.findByIdAndRemove(id)
		.then(( doc ) => {
			if( !doc ) {
				return res.status(404).send('Unable to find Article with the provided Id')
			}
			res.status(200).send({ doc })
		}, (err) => {
			res.status(404).send('unable to find articl')
		})
});


app.listen(app.get('port'), () => {
	console.log(`Express web app is avialable at ` + app.get('port'));
})

module.exports = app;