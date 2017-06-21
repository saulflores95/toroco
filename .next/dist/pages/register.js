'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Register = require('../comp/register/Register');

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var register = function register() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_Register2.default, null));
};

/*
register.getInitialProps = async({ req, res }) => {
  if (req.user) {
    return res.redirect('/')
  }
  let user = 'No User'
  return { user: user }
}
*/

exports.default = register;