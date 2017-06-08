
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Video = __webpack_require__(599);

var _Video2 = _interopRequireDefault(_Video);

var _Menu = __webpack_require__(598);

var _Menu2 = _interopRequireDefault(_Menu);

var _reactGridSystem = __webpack_require__(590);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_Video2.default, null), _react2.default.createElement(_Menu2.default, null));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\toroco\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\toroco\\pages\\index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(547);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(546);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu() {
  return _react2.default.createElement('div', { className: 'container', 'data-jsx': 3801479340
  }, _react2.default.createElement('div', { id: 'menu', className: 'menuContainer', 'data-jsx': 3801479340
  }, _react2.default.createElement('div', {
    'data-jsx': 3801479340
  }, _react2.default.createElement('ul', { className: 'linkContainer', 'data-jsx': 3801479340
  }, _react2.default.createElement('li', { className: 'li', 'data-jsx': 3801479340
  }, _react2.default.createElement(_link2.default, { href: '/quienes-somos' }, _react2.default.createElement('a', {
    'data-jsx': 3801479340
  }, 'Quienes Somos'))), _react2.default.createElement('li', { className: 'li', 'data-jsx': 3801479340
  }, _react2.default.createElement(_link2.default, { href: '/servicios' }, _react2.default.createElement('a', {
    'data-jsx': 3801479340
  }, 'Servicios'))), _react2.default.createElement('li', { className: 'li', 'data-jsx': 3801479340
  }, _react2.default.createElement(_link2.default, { href: '/contacto' }, _react2.default.createElement('a', {
    'data-jsx': 3801479340
  }, 'Contactanos'))), _react2.default.createElement('li', { className: 'li', 'data-jsx': 3801479340
  }, _react2.default.createElement('img', { src: 'http://www.torocotrucking.com/freightmanager/images/main_logo.jpg', 'data-jsx': 3801479340
  }))))), _react2.default.createElement(_style2.default, {
    styleId: 3801479340,
    css: '@media only screen and (min-width:1025px){.container[data-jsx="3801479340"]{background:white;position:absolute;bottom:0;right:0;height:100%;width:35%;max-width:50em;margin:auto auto 1em}.menu-container[data-jsx="3801479340"]{z-index:1;background-color:white;width:500px;height:100%}a[data-jsx="3801479340"]{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}.li[data-jsx="3801479340"]{color:gray;font-size:45px;cursor:pointer;cursor:hand;-webkit-text-decoration:none;text-decoration:none;padding-top:60px;font-weight:bold;-webkit-text-align:center;text-align:center;-webkit-transition:font-size 0.1s ease-in-out;transition:font-size 0.1s ease-in-out;-o-transition:font-size color 0.2s ease-in-out;-ms-transition:font-size color 0.2s ease-in-out;-moz-transition:font-size color 0.2s ease-in-out;/*Firefox*/            -webkit-transition:font-size color 0.2s ease-in-out}.li:hover[data-jsx="3801479340"]{font-size:55px;color:green}.li[data-jsx="3801479340"] img[data-jsx="3801479340"]{width:58%;height:100px}li[data-jsx="3801479340"]{list-style-type:none}}@media only screen and (min-width:481px) and (max-width:1024px){.container[data-jsx="3801479340"]{background:white;position:absolute;bottom:0;right:0;height:100%;width:35%;max-width:50em;margin:auto auto 1em}a[data-jsx="3801479340"]{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}.menu-container[data-jsx="3801479340"]{z-index:111;background-color:white;width:250px;height:100%}li[data-jsx="3801479340"]{color:gray;font-size:20px;cursor:pointer;cursor:hand;padding-top:60px;font-weight:bold;-webkit-text-align:center;text-align:center;-webkit-transition:font-size 0.1s ease-in-out;transition:font-size 0.1s ease-in-out;-o-transition:font-size color 0.5s ease-in-out;-ms-transition:font-size color 0.5s ease-in-out;-moz-transition:font-size color 0.5s ease-in-out;/*Firefox*/            -webkit-transition:font-size color 0.5s ease-in-out}li[data-jsx="3801479340"]:hover{font-size:30px;color:green}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wXFxtZW51XFxNZW51LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1NhdWwvRG9jdW1lbnRzL0dpdEh1Yi90b3JvY28iLCJzb3VyY2VzQ29udGVudCI6W119 */\n/*@ sourceURL=comp\\menu\\Menu.js */'
  }));
};

exports.default = Menu;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\toroco\\comp\\menu\\Menu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\toroco\\comp\\menu\\Menu.js"); } } })();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(547);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function Video() {
  return _react2.default.createElement('div', { className: 'container', 'data-jsx': 606254878
  }, _react2.default.createElement('div', { className: 'videoContainer', 'data-jsx': 606254878
  }, _react2.default.createElement('video', { width: '100%', height: '100%', autoPlay: true, loop: true, muted: true, 'data-jsx': 606254878
  }, _react2.default.createElement('source', { src: 'http://cdn.shutterstock.com/shutterstock/videos/4462838/preview/stock-footage--wheel-truck-on-the-road-with-sunset-in-the-background-large-delivery-truck-is-moving-towards-set.mp4', type: 'video/mp4', 'data-jsx': 606254878
  }), _react2.default.createElement('source', { src: 'https://videos.pond5.com/truck-highway-2-footage-033305026_main_xxl.mp4', type: 'video/mp4', 'data-jsx': 606254878
  }), 'Your browser does not support the video tag.'), _react2.default.createElement('div', { className: 'overlay', 'data-jsx': 606254878
  }, _react2.default.createElement('h1', {
    'data-jsx': 606254878
  }, 'Toroco Trucking'))), _react2.default.createElement(_style2.default, {
    styleId: 606254878,
    css: '@media only screen and (min-width:1025px){.video-container[data-jsx="606254878"]{position:absolute;top:0;bottom:0;width:100%;height:100%;overflow:hidden;z-index:100}.video-container[data-jsx="606254878"] video[data-jsx="606254878"]{min-width:100%;min-height:100%;width:auto;height:auto;z-index:-1;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.overlay[data-jsx="606254878"]{background:rgba(0,0,0,0.5);position:absolute;bottom:50%;left:0;right:30%;width:95%;max-width:50em;margin:auto auto 1em;box-sizing:border-box;padding:2em;line-height:1.5;-webkit-text-align:center;text-align:center}.overlay[data-jsx="606254878"] h1[data-jsx="606254878"]{font-size:55px;color:white}}@media only screen and (min-width:481px) and (max-width:1024px){.video-container[data-jsx="606254878"]{position:absolute;top:0;bottom:0;width:100%;height:100%;overflow:hidden;z-index:100}.video-container[data-jsx="606254878"] video[data-jsx="606254878"]{min-width:100%;min-height:100%;width:auto;height:auto;z-index:-1;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.overlay[data-jsx="606254878"]{background:rgba(0,0,0,0.5);position:absolute;bottom:50%;left:0;right:30%;width:95%;max-width:50em;margin:auto auto 1em;box-sizing:border-box;padding:2em;line-height:1.5;-webkit-text-align:center;text-align:center}.overlay[data-jsx="606254878"] h1[data-jsx="606254878"]{font-size:55px;color:white}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wXFx2aWRlb1xcVmlkZW8uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvU2F1bC9Eb2N1bWVudHMvR2l0SHViL3Rvcm9jbyIsInNvdXJjZXNDb250ZW50IjpbXX0= */\n/*@ sourceURL=comp\\video\\Video.js */'
  }));
};

exports.default = Video;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\toroco\\comp\\video\\Video.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\toroco\\comp\\video\\Video.js"); } } })();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(581);


/***/ })

},[600]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NjZjMGM0OCIsIndlYnBhY2s6Ly8vLi9jb21wL21lbnUvTWVudS5qcz82NmMwYzQ4Iiwid2VicGFjazovLy8uL2NvbXAvdmlkZW8vVmlkZW8uanM/NjZjMGM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlkZW8gZnJvbSAnLi4vY29tcC92aWRlby9WaWRlbydcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcC9tZW51L01lbnUnXHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPFZpZGVvIC8+XHJcbiAgICA8TWVudSAvPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgPGRpdiBpZD0nbWVudScgY2xhc3NOYW1lPSdtZW51Q29udGFpbmVyJz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaW5rQ29udGFpbmVyJz5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xpJz48TGluayBocmVmPScvcXVpZW5lcy1zb21vcyc+PGE+UXVpZW5lcyBTb21vczwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xpJz48TGluayBocmVmPScvc2VydmljaW9zJz48YT5TZXJ2aWNpb3M8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaSc+PExpbmsgaHJlZj0nL2NvbnRhY3RvJz48YT5Db250YWN0YW5vczwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xpJz48aW1nIHNyYz0naHR0cDovL3d3dy50b3JvY290cnVja2luZy5jb20vZnJlaWdodG1hbmFnZXIvaW1hZ2VzL21haW5fbG9nby5qcGcnLz48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDsgLyogYmx1ZSBjb2xvcnMgZm9yIGxpbmtzIHRvbyAqL1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7IC8qIG5vIHVuZGVybGluZSAqL1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBoYW5kO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBmb250LXNpemUgY29sb3IgMC4ycyBlYXNlLWluLW91dDsgLyogb3BlcmEgKi9cclxuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGZvbnQtc2l6ZSBjb2xvciAwLjJzIGVhc2UtaW4tb3V0OyAvKiBJRSAxMCAqL1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGZvbnQtc2l6ZSBjb2xvciAwLjJzIGVhc2UtaW4tb3V0Oy8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmb250LXNpemUgY29sb3IgMC4ycyBlYXNlLWluLW91dDsgLypzYWZhcmkgYW5kIGNocm9tZSAqL1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saTpob3ZlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1OCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MGVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0byAxZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7IC8qIGJsdWUgY29sb3JzIGZvciBsaW5rcyB0b28gKi9cclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyAvKiBubyB1bmRlcmxpbmUgKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDExMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IGhhbmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogZm9udC1zaXplIGNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7IC8qIG9wZXJhICovXHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBmb250LXNpemUgY29sb3IgMC41cyBlYXNlLWluLW91dDsgLyogSUUgMTAgKi9cclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBmb250LXNpemUgY29sb3IgMC41cyBlYXNlLWluLW91dDsvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZm9udC1zaXplIGNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7IC8qc2FmYXJpIGFuZCBjaHJvbWUgKi9cclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXAvbWVudS9NZW51LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVmlkZW8gPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndmlkZW9Db250YWluZXInPlxyXG4gICAgICA8dmlkZW8gd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgYXV0b1BsYXkgbG9vcCBtdXRlZD5cclxuICAgICAgICA8c291cmNlIHNyYz0naHR0cDovL2Nkbi5zaHV0dGVyc3RvY2suY29tL3NodXR0ZXJzdG9jay92aWRlb3MvNDQ2MjgzOC9wcmV2aWV3L3N0b2NrLWZvb3RhZ2UtLXdoZWVsLXRydWNrLW9uLXRoZS1yb2FkLXdpdGgtc3Vuc2V0LWluLXRoZS1iYWNrZ3JvdW5kLWxhcmdlLWRlbGl2ZXJ5LXRydWNrLWlzLW1vdmluZy10b3dhcmRzLXNldC5tcDQnIHR5cGU9J3ZpZGVvL21wNCcgLz5cclxuICAgICAgICA8c291cmNlIHNyYz0naHR0cHM6Ly92aWRlb3MucG9uZDUuY29tL3RydWNrLWhpZ2h3YXktMi1mb290YWdlLTAzMzMwNTAyNl9tYWluX3h4bC5tcDQnIHR5cGU9J3ZpZGVvL21wNCcgLz5cclxuICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxyXG4gICAgICA8L3ZpZGVvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmxheSc+XHJcbiAgICAgICAgPGgxPlRvcm9jbyBUcnVja2luZzwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHZpZGVvIHtcbiAgICAgICAgICAgIC8qIE1ha2UgdmlkZW8gdG8gYXQgbGVhc3QgMTAwJSB3aWRlIGFuZCB0YWxsICovXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAvKiBTZXR0aW5nIHdpZHRoICYgaGVpZ2h0IHRvIGF1dG8gcHJldmVudHMgdGhlIGJyb3dzZXIgZnJvbSBzdHJldGNoaW5nIG9yIHNxdWlzaGluZyB0aGUgdmlkZW8gKi9cbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAvKiBDZW50ZXIgdGhlIHZpZGVvICovXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDMwJTtcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwZW07XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0byAxZW07XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3ZlcmxheSBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52aWRlby1jb250YWluZXIgdmlkZW8ge1xuICAgICAgICAgICAgLyogTWFrZSB2aWRlbyB0byBhdCBsZWFzdCAxMDAlIHdpZGUgYW5kIHRhbGwgKi9cbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgIC8qIFNldHRpbmcgd2lkdGggJiBoZWlnaHQgdG8gYXV0byBwcmV2ZW50cyB0aGUgYnJvd3NlciBmcm9tIHN0cmV0Y2hpbmcgb3Igc3F1aXNoaW5nIHRoZSB2aWRlbyAqL1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIC8qIENlbnRlciB0aGUgdmlkZW8gKi9cbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMzAlO1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBlbTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvIDFlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5vdmVybGF5IGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBgfVxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcblxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wL3ZpZGVvL1ZpZGVvLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFQQTtBQUFBO0FBQUE7QUFzSEE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBQUE7QUFBQTtBQW9IQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        