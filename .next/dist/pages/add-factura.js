'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Uploader = require('../comp/uploader/Uploader');

var _Uploader2 = _interopRequireDefault(_Uploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addFactura = function addFactura(_ref) {
  var user = _ref.user;
  return _react2.default.createElement('div', { className: 'factura' }, _react2.default.createElement(_Uploader2.default, null), _react2.default.createElement('style', null, '\n        .factura {\n          margin-top:200px;\n        }\n      '));
};

/* addFactura.getInitialProps = async ({ req, res }) => {
  if (!req.user) {
    return res.redirect('/')
  }
  return { user: req.user.username }
}
*/

exports.default = addFactura;