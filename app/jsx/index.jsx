var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ToDoApp = require('ToDoApp');
// Load Foundation
Foundation.addToJquery($);
$(document).foundation();

//Added CSS
require('style!css!sass!AppStyle')

ReactDOM.render(
  <ToDoApp />,
	document.getElementById('app')	
);