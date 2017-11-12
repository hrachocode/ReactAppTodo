var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load Foundation
$(document).foundation();

//Added CSS
require('style!css!sass!AppStyle')

ReactDOM.render(
  <h1>Boilerplate Timer Project</h1>,
	document.getElementById('app')	
);