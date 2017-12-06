const express		= require('express');
const bodyParser	= require('body-parser');
const read 			= require('node-readability');
const fs 			= require('fs');

const url = 'http://www.manning.com/cantelon2/'
read(url, ( err, res) => {
	console.log(res);
	fs.writeFile('test.html', res.content)
})