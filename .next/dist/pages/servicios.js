'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../comp/app/App');

var _App2 = _interopRequireDefault(_App);

var _Parallax = require('../comp/parallax/Parallax');

var _Parallax2 = _interopRequireDefault(_Parallax);

var _Services = require('../comp/services/Services');

var _Services2 = _interopRequireDefault(_Services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_App2.default, null, _react2.default.createElement(_Parallax2.default, { title: 'Servicios', img: 'https://billandpaige.files.wordpress.com/2014/03/dsc_3362-version-2.jpg' }), _react2.default.createElement(_Services2.default, null)));
};