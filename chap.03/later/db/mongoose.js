const mongoose	= require('mongoose')

const dbURL = 'mongodb://ahmed_soliman:abc123@ds129966.mlab.com:29966/later'
mongoose.connect(dbURL);

module.exports = { mongoose }