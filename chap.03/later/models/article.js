const mongoose = require('mongoose');

const Article = mongoose.model('Article', {
	title: {
		type: String
	}
})

module.exports = { Article };