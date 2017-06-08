'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Video = require('../comp/video/Video');

var _Video2 = _interopRequireDefault(_Video);

var _Menu = require('../comp/menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_Video2.default, null), _react2.default.createElement(_Menu2.default, null));
};