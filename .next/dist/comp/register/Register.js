'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Register = function (_Component) {
  (0, _inherits3.default)(Register, _Component);

  function Register() {
    (0, _classCallCheck3.default)(this, Register);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Register.__proto__ || (0, _getPrototypeOf2.default)(Register)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Register, [{
    key: 'addUser',
    value: function addUser() {
      var username = this.refs.username.value;
      var password = this.refs.password.value;
      if (username) {
        _axios2.default.post('/api/register', {
          username: username,
          password: password
        }).then(function (response) {
          if (response.data.message === 'A user with the given username is already registered') {
            return alert(response.data.message);
          } else {
            alert('Welcome to HCB ' + username);
            _index2.default.push('/');
          }
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

      return _react2.default.createElement('div', {
        'data-jsx': 764230844
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 764230844
      }, _react2.default.createElement('div', { className: 'vid-container', 'data-jsx': 764230844
      }, _react2.default.createElement('img', { className: 'bgvid', src: 'http://wallpapercave.com/wp/2GFdZrW.jpg', 'data-jsx': 764230844
      }), _react2.default.createElement('div', { className: 'inner-container', 'data-jsx': 764230844
      }, _react2.default.createElement('img', (_React$createElement = { src: 'http://wallpapercave.com/wp/2GFdZrW.jpg', className: 'bgvid' }, (0, _defineProperty3.default)(_React$createElement, 'className', 'bgvid inner'), (0, _defineProperty3.default)(_React$createElement, 'data-jsx', 764230844), _React$createElement)), _react2.default.createElement('div', { className: 'box', 'data-jsx': 764230844
      }, _react2.default.createElement('h1', {
        'data-jsx': 764230844
      }, 'Register Son!'), _react2.default.createElement('input', { type: 'text', ref: 'username', placeholder: 'Username', 'data-jsx': 764230844
      }), _react2.default.createElement('input', { type: 'password', ref: 'password', placeholder: 'Password', 'data-jsx': 764230844
      }), _react2.default.createElement('button', { type: 'button', onClick: this.addUser.bind(this), 'data-jsx': 764230844
      }, 'Register'), _react2.default.createElement('p', {
        'data-jsx': 764230844
      }, 'Are you member? ', _react2.default.createElement('span', {
        'data-jsx': 764230844
      }, _react2.default.createElement(_link2.default, { href: '/login' }, _react2.default.createElement('a', {
        'data-jsx': 764230844
      }, 'Log In')))))))), _react2.default.createElement(_style2.default, {
        styleId: 764230844,
        css: 'body[data-jsx="764230844"]{padding:0;margin:0}.vid-container[data-jsx="764230844"]{position:relative;height:100vh;overflow:hidden}.bgvid[data-jsx="764230844"]{position:absolute;left:0;top:0;width:100vw}.inner-container[data-jsx="764230844"]{width:400px;height:400px;position:absolute;top:calc(50vh - 200px);left:calc(50vw - 200px);overflow:hidden}.bgvid.inner[data-jsx="764230844"]{top:calc(-50vh+200px);left:calc(-50vw+200px);filter:url("data:image/svg+xml;utf9,<svg%20version=\'1.1\'%20xmlns=\'http://www.w3.org/2000/svg\'><filter%20id=\'blur\'><feGaussianBlur%20stdDeviation=\'10\'%20/></filter></svg>#blur");-webkit-filter:blur(10px);-ms-filter:blur(10px);-o-filter:blur(10px);filter:blur(10px)}.box[data-jsx="764230844"]{position:absolute;height:100%;width:100%;font-family:Helvetica;color:#fff;background:rgba(0,0,0,0.13);padding:30px 0px}.box[data-jsx="764230844"] h1[data-jsx="764230844"]{-webkit-text-align:center;text-align:center;margin:30px 0;font-size:30px}.box[data-jsx="764230844"] input[data-jsx="764230844"]{display:block;width:300px;margin:20px auto;padding:15px;background:rgba(0,0,0,0.2);color:#fff;border:0}.box[data-jsx="764230844"] input[data-jsx="764230844"]:focus,.box[data-jsx="764230844"] input[data-jsx="764230844"]:active,.box[data-jsx="764230844"] button[data-jsx="764230844"]:focus,.box[data-jsx="764230844"] button[data-jsx="764230844"]:active{outline:none}.box[data-jsx="764230844"] button[data-jsx="764230844"]{background:#2ecc71;border:0;color:#fff;padding:10px;font-size:20px;width:330px;margin:20px auto;display:block;cursor:pointer}.box[data-jsx="764230844"] button[data-jsx="764230844"]:active{background:#27ae60}.box[data-jsx="764230844"] p[data-jsx="764230844"]{font-size:14px;-webkit-text-align:center;text-align:center}.box[data-jsx="764230844"] p[data-jsx="764230844"] span[data-jsx="764230844"]{cursor:pointer;color:#666}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wXFxyZWdpc3RlclxcUmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvU2F1bC9Eb2N1bWVudHMvR2l0SHViL3Rvcm9jbyIsInNvdXJjZXNDb250ZW50IjpbXX0= */\n/*@ sourceURL=comp\\register\\Register.js */'
      }));
    }
  }]);

  return Register;
}(_react.Component);

exports.default = Register;