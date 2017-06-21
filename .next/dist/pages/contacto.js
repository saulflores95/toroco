'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _this = undefined;

var contacto = function contacto(_ref) {
  var user = _ref.user;
  return _react2.default.createElement('div', null, _react2.default.createElement(_App2.default, null, _react2.default.createElement(_Navbar2.default, { user: user }), _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement(_reactNoSsr2.default, { onLoading: _react2.default.createElement('div', null, 'Loading') }, _react2.default.createElement(_Contact2.default, null)))), _react2.default.createElement('style', null, '\n      .container {\n        margin-top:100px;\n      }\n    '));
};

contacto.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
    var req = _ref2.req,
        res = _ref2.res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', { user: null });

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = contacto;