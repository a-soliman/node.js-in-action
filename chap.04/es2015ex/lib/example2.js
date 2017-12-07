'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example_two = function () {
	function Example_two() {
		_classCallCheck(this, Example_two);
	}

	_createClass(Example_two, [{
		key: 'render',
		value: function render() {
			return '<h1>Example_two...</h1>';
		}
	}]);

	return Example_two;
}();

var example = new Example();
console.log('Example.render()');