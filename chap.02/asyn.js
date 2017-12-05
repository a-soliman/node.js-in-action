function asyncFunction( callback ) {
	setTimeout(callback, 5000);
}

let color = 'blue';

(color => {
	asyncFunction(() => {
		console.log('The color is ' + color);
	})
})(color);

color = 'green'
console.log(color)