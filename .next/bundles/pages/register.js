
          window.__NEXT_REGISTER_PAGE('/register', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(65);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(64);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Register = __webpack_require__(571);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\toroco\\pages\\register.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\toroco\\pages\\register.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/register")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(601);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(547);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(540);

var _axios2 = _interopRequireDefault(_axios);

var _index = __webpack_require__(83);

var _index2 = _interopRequireDefault(_index);

var _link = __webpack_require__(546);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\toroco\\comp\\register\\Register.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\toroco\\comp\\register\\Register.js"); } } })();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(549);


/***/ })

},[573]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXHJlZ2lzdGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVnaXN0ZXIuanM/NjM5YjczYSIsIndlYnBhY2s6Ly8vLi9jb21wL3JlZ2lzdGVyL1JlZ2lzdGVyLmpzPzYzOWI3M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vY29tcC9yZWdpc3Rlci9SZWdpc3RlcidcclxuXHJcbmNvbnN0IHJlZ2lzdGVyID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8UmVnaXN0ZXIgLz5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxucmVnaXN0ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgaWYgKHJlcS51c2VyKSB7XHJcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvJylcclxuICB9XHJcbiAgbGV0IHVzZXIgPSAnTm8gVXNlcidcclxuICByZXR1cm4geyB1c2VyOiB1c2VyIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcmVnaXN0ZXIuanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFVzZXIoKSB7XHJcbiAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLnJlZnMudXNlcm5hbWUudmFsdWVcclxuICAgIGxldCBwYXNzd29yZCA9IHRoaXMucmVmcy5wYXNzd29yZC52YWx1ZVxyXG4gICAgaWYgKHVzZXJuYW1lKSB7XHJcbiAgICAgIGF4aW9zLnBvc3QoJy9hcGkvcmVnaXN0ZXInLCB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2UgPT09ICdBIHVzZXIgd2l0aCB0aGUgZ2l2ZW4gdXNlcm5hbWUgaXMgYWxyZWFkeSByZWdpc3RlcmVkJyl7XHJcbiAgICAgICAgICByZXR1cm4gYWxlcnQocmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KGBXZWxjb21lIHRvIEhDQiAke3VzZXJuYW1lfWApXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aWQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYmd2aWQnIHNyYz0naHR0cDovL3dhbGxwYXBlcmNhdmUuY29tL3dwLzJHRmRaclcuanBnJyAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbm5lci1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHA6Ly93YWxscGFwZXJjYXZlLmNvbS93cC8yR0ZkWnJXLmpwZycgY2xhc3NOYW1lPSdiZ3ZpZCcgY2xhc3NOYW1lPSdiZ3ZpZCBpbm5lcicgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+UmVnaXN0ZXIgU29uITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZWY9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPSdVc2VybmFtZScvPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIHJlZj1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJy8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuYWRkVXNlci5iaW5kKHRoaXMpfT5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8cD5BcmUgeW91IG1lbWJlcj8gPHNwYW4+PExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPkxvZyBJbjwvYT48L0xpbms+PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlkLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJndmlke1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwdnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW5uZXItY29udGFpbmVye1xyXG4gICAgICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOmNhbGMoNTB2aCAtIDIwMHB4KTtcclxuICAgICAgICAgICAgbGVmdDpjYWxjKDUwdncgLSAyMDBweCk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iZ3ZpZC5pbm5lcntcclxuICAgICAgICAgICAgdG9wOmNhbGMoLTUwdmggKyAyMDBweCk7XHJcbiAgICAgICAgICAgIGxlZnQ6Y2FsYygtNTB2dyArIDIwMHB4KTtcclxuICAgICAgICAgICAgZmlsdGVyOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOSw8c3ZnJTIwdmVyc2lvbj0nMS4xJyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGZpbHRlciUyMGlkPSdibHVyJz48ZmVHYXVzc2lhbkJsdXIlMjBzdGREZXZpYXRpb249JzEwJyUyMC8+PC9maWx0ZXI+PC9zdmc+I2JsdXJcIik7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOmJsdXIoMTBweCk7XHJcbiAgICAgICAgICAgIC1tcy1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAgICAgICAgIC1vLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgICAgICAgZmlsdGVyOmJsdXIoMTBweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OkhlbHZldGljYTtcclxuICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMTMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjMwcHggMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveCBoMXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjozMHB4IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveCBpbnB1dHtcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjoyMHB4IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveCBpbnB1dDpmb2N1cywuYm94IGlucHV0OmFjdGl2ZSwuYm94IGJ1dHRvbjpmb2N1cywuYm94IGJ1dHRvbjphY3RpdmV7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3ggYnV0dG9ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiMyZWNjNzE7XHJcbiAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDozMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luOjIwcHggYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94IGJ1dHRvbjphY3RpdmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzI3YWU2MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3ggcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveCBwIHNwYW57XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjojNjY2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wL3JlZ2lzdGVyL1JlZ2lzdGVyLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQU5BO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFFQTtBQVhBO0FBYUE7QUFFQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQXNHQTtBQXRHQTs7Ozs7QUFqQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        