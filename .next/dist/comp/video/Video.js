'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function Video() {
  return _react2.default.createElement('div', { className: 'container', 'data-jsx': 3207251917
  }, _react2.default.createElement('div', { className: 'videoContainer', 'data-jsx': 3207251917
  }, _react2.default.createElement('video', { width: '100%', height: '100%', autoPlay: true, loop: true, muted: true, 'data-jsx': 3207251917
  }, _react2.default.createElement('source', { src: 'http://cdn.shutterstock.com/shutterstock/videos/4462838/preview/stock-footage--wheel-truck-on-the-road-with-sunset-in-the-background-large-delivery-truck-is-moving-towards-set.mp4', type: 'video/mp4', 'data-jsx': 3207251917
  }), _react2.default.createElement('source', { src: 'https://videos.pond5.com/truck-highway-2-footage-033305026_main_xxl.mp4', type: 'video/mp4', 'data-jsx': 3207251917
  }), 'Your browser does not support the video tag.'), _react2.default.createElement('div', { className: 'overlay', 'data-jsx': 3207251917
  }, _react2.default.createElement('h1', {
    'data-jsx': 3207251917
  }, 'Toroco Trucking'))), _react2.default.createElement(_style2.default, {
    styleId: 3207251917,
    css: '@media only screen and (min-width:1025px){.video-container[data-jsx="3207251917"]{position:absolute;top:0;bottom:0;width:100%;height:100%;overflow:hidden;z-index:100}.video-container[data-jsx="3207251917"] video[data-jsx="3207251917"]{min-width:100%;min-height:100%;width:auto;height:auto;z-index:-1;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.overlay[data-jsx="3207251917"]{background:rgba(0,0,0,0.5);position:absolute;bottom:50%;left:0;right:30%;width:95%;font-family:\'Roboto\';max-width:50em;margin:auto auto 1em;box-sizing:border-box;padding:2em;line-height:1.5;-webkit-text-align:center;text-align:center}.overlay[data-jsx="3207251917"] h1[data-jsx="3207251917"]{font-size:55px;color:white}}@media only screen and (min-width:481px) and (max-width:1024px){.video-container[data-jsx="3207251917"]{position:absolute;top:0;bottom:0;width:100%;height:100%;overflow:hidden;z-index:100}.video-container[data-jsx="3207251917"] video[data-jsx="3207251917"]{min-width:100%;min-height:100%;width:auto;height:auto;z-index:-1;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.overlay[data-jsx="3207251917"]{background:rgba(0,0,0,0.5);position:absolute;bottom:50%;left:0;right:30%;width:95%;max-width:50em;margin:auto auto 1em;box-sizing:border-box;padding:2em;line-height:1.5;-webkit-text-align:center;text-align:center}.overlay[data-jsx="3207251917"] h1[data-jsx="3207251917"]{font-size:55px;color:white}}'
  }));
};

exports.default = Video;