'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Navbar = require('../navbar/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.0.3/dist/leaflet.css' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }), _react2.default.createElement('style', null, '\n        .leaflet-container {\n          height: 100%;\n          width: 100%;\n        }\n        #__next {\n          height: 100%;\n        }\n        .body {\n          font-family: Roboto;\n        }\n      ')), _react2.default.createElement('div', null, props.children));
};

exports.default = App;