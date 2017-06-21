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

var _Nosotros = require('../comp/nosotros/Nosotros');

var _Nosotros2 = _interopRequireDefault(_Nosotros);

var _Info = require('../comp/info/Info');

var _Info2 = _interopRequireDefault(_Info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_App2.default, null, _react2.default.createElement(_Parallax2.default, { title: 'Nosotros', img: 'http://www.torocotrucking.com/freightmanager/images/main_image2.jpg' }), _react2.default.createElement(_Nosotros2.default, null), _react2.default.createElement(_Info2.default, null)));
};