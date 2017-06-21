'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _reactGridSystem = require('react-grid-system');

var _Navbar = require('../navbar/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var position = [32.5194358, -117.0101997];

//  const tijuana = [32.545048, -116.999554]
//  const sanDiego = [32.574632, -116.962051]

var Contact = function (_Component) {
  (0, _inherits3.default)(Contact, _Component);

  function Contact() {
    (0, _classCallCheck3.default)(this, Contact);

    return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).apply(this, arguments));
  }

  (0, _createClass3.default)(Contact, [{
    key: 'render',
    value: function render() {
      var _require = require('react-leaflet'),
          Map = _require.Map,
          Marker = _require.Marker,
          Popup = _require.Popup,
          TileLayer = _require.TileLayer;

      return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 292737976
      }, _react2.default.createElement('div', { className: 'imgcontainer', 'data-jsx': 292737976
      }, _react2.default.createElement('img', { width: '100px', height: '100px', src: 'http://www.torocotrucking.com/freightmanager/images/main_logo.jpg', 'data-jsx': 292737976
      })), _react2.default.createElement('h2', { className: 'text', 'data-jsx': 292737976
      }, 'Contact us'), _react2.default.createElement('h2', { className: 'text', 'data-jsx': 292737976
      }, 'It is our pleasure!'), _react2.default.createElement(_reactGridSystem.Container, { className: 'contactForm' }, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement('div', {
        'data-jsx': 292737976
      }, _react2.default.createElement(_TextField2.default, {
        hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 292737976
        }, 'Name'),
        fullWidth: true
      }), _react2.default.createElement('br', {
        'data-jsx': 292737976
      }), _react2.default.createElement(_TextField2.default, {
        hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 292737976
        }, 'Email'),
        fullWidth: true
      }), _react2.default.createElement('br', {
        'data-jsx': 292737976
      }), _react2.default.createElement(_TextField2.default, {
        hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 292737976
        }, 'Phone'),
        fullWidth: true
      }), _react2.default.createElement('br', {
        'data-jsx': 292737976
      }), _react2.default.createElement(_TextField2.default, {
        hintText: _react2.default.createElement('span', { className: 'label', 'data-jsx': 292737976
        }, 'Message'),
        fullWidth: true,
        multiLine: true,
        rows: 2
      }), _react2.default.createElement('br', {
        'data-jsx': 292737976
      }))), _react2.default.createElement('div', { className: 'map', 'data-jsx': 292737976
      }, _react2.default.createElement(Map, { center: position, zoom: 12 }, _react2.default.createElement(TileLayer, {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      }))), _react2.default.createElement('div', {
        'data-jsx': 292737976
      }, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { lg: 6, md: 6, sm: 6 }, _react2.default.createElement('div', { className: 'number', 'data-jsx': 292737976
      }, _react2.default.createElement('h1', {
        'data-jsx': 292737976
      }, 'Tijuana'), _react2.default.createElement('h3', {
        'data-jsx': 292737976
      }, _react2.default.createElement('b', {
        'data-jsx': 292737976
      }, 'Tel: '), '(664) 647-8794 '), _react2.default.createElement('h3', {
        'data-jsx': 292737976
      }, _react2.default.createElement('b', {
        'data-jsx': 292737976
      }, 'Tel: '), '(664) 647-5930 '), _react2.default.createElement('h3', {
        'data-jsx': 292737976
      }, _react2.default.createElement('b', {
        'data-jsx': 292737976
      }, 'Fax: '), '(619) 758-3634 '))), _react2.default.createElement(_reactGridSystem.Col, { lg: 6, md: 6, sm: 6 }, _react2.default.createElement('div', { className: 'number', 'data-jsx': 292737976
      }, _react2.default.createElement('h1', {
        'data-jsx': 292737976
      }, 'San Diego'), _react2.default.createElement('h3', {
        'data-jsx': 292737976
      }, _react2.default.createElement('b', {
        'data-jsx': 292737976
      }, 'Tel: '), '(619) 671-5840'), _react2.default.createElement('h3', {
        'data-jsx': 292737976
      }, _react2.default.createElement('b', {
        'data-jsx': 292737976
      }, 'Fax: '), '(619) 758-3634')))))), _react2.default.createElement(_style2.default, {
        styleId: 292737976,
        css: '.wrapper[data-jsx="292737976"]{padding-top:30px}.text[data-jsx="292737976"]{-webkit-text-align:center;text-align:center;color:gray;font-size:16px}.label[data-jsx="292737976"]{color:gray !important}.imgcontainer[data-jsx="292737976"]{width:100px;height:100px;margin-left:auto;margin-right:auto;display:block}.contactForm[data-jsx="292737976"]{padding-top:15px}.map[data-jsx="292737976"]{height:350px;margin-bottom:55px}.number[data-jsx="292737976"]{-webkit-text-align:center;text-align:center}'
      }));
    }
  }]);

  return Contact;
}(_react.Component);

exports.default = Contact;