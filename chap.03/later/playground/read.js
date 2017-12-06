const express		= require('express');
const bodyParser	= require('body-parser');
const read 			= require('node-readability');

const url = 'http://www.manning.com/cantelon2/'
read(url, ( err, res) => {
	console.log(res.content);
})