'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Parallax = function Parallax(_ref) {
  var title = _ref.title,
      img = _ref.img;
  return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'parallax' }, _react2.default.createElement('div', { className: 'overlay' }, _react2.default.createElement('h1', null, title))), _react2.default.createElement('style', null, '\n      .parallax {\n        background-image: url(' + img + ');\n        min-height: 500px;\n        background-attachment: fixed;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n      }\n\n      .overlay {\n        font-family:Roboto;\n        color: white;\n        font-size: 45px;\n        top: 30%;\n        left: 35%;\n        position:absolute;\n        letter-spacing: 0.5em;\n        background: rgba(0,0,0,0.7);\n        height:100px;\n        margin:0px;\n        padding:10px;\n      }\n\n      .overlay h1 {\n        margin:0px;\n      }\n    '));
};

exports.default = Parallax;