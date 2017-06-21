'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientList = function ClientList(_ref) {
  var clients = _ref.clients;
  return _react2.default.createElement('div', { className: 'list' }, clients.map(function (client) {
    _react2.default.createElement('div', { className: 'list-item' });
  }), _react2.default.createElement('style', null, '\n        .list {\n          width: 30%;\n          border-style: solid;\n          height: 980px;\n        }\n      '));
};
exports.default = ClientList;