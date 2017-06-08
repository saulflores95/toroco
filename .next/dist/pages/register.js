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

var _Register = require('../comp/register/Register');

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var register = function register() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_Register2.default, null));
};

register.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
    var req = _ref.req,
        res = _ref.res;
    var user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.user) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', res.redirect('/'));

          case 2:
            user = 'No User';
            return _context.abrupt('return', { user: user });

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = register;