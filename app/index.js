var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main');
var Modernizr = require('./utils/modernizr-custom.js');
var IEPoly = require('./utils/ie_poly.js');

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);

