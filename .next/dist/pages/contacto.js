'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('../comp/navbar/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Contact = require('../comp/contact/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _App = require('../comp/app/App');

var _App2 = _interopRequireDefault(_App);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contacto = function contacto() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_App2.default, null, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement(_reactNoSsr2.default, { onLoading: _react2.default.createElement('div', null, 'Loading') }, _react2.default.createElement(_Contact2.default, null)))), _react2.default.createElement('style', null, '\n      .container {\n        margin-top:100px;\n      }\n    '));
};

/*contacto.getInitialProps = async({ req, res }) => {
  return { user: null }
}*/

exports.default = contacto;