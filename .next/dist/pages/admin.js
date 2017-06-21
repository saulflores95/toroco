'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClientList = require('../comp/clients/ClientList');

var _ClientList2 = _interopRequireDefault(_ClientList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummy = [{ name: 'Saul Flores',
  location: 'Tijuana'
}, {
  name: 'Ruben Casas',
  location: 'Mexicali'
}, {
  name: 'Roberto Martinez',
  location: 'Sonora'
}];

var admin = function admin() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_ClientList2.default, { clients: dummy }));
};

exports.default = admin;