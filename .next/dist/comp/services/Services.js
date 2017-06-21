'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = require('react-grid-system');

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var services = [{ title: 'Servicio de Importación/Exportación a través del Puerto de Entrada de Otay Mesa', icon: 'fa fa-truck' }, { title: 'Servicio a cualquier localización en los estados de California, Nevada, Arizona, Oregon y Washington', icon: 'fa fa-globe' }, { title: 'Como miembro activo del programa C-TPAT sus cargas cruzarán por la línea FAST', icon: 'fa fa-fighter-jet' }, { title: 'Se elaboran E-Manifest utilizando el sistema ACE del CBP', icon: 'fa fa-check' }, { title: 'Disponibilidad de trailers de 53 pies 24/7', icon: 'fa fa-clock-o' }, { title: 'Sistema de monitoreo GPS para sus cargas', icon: 'fa fa-map-marker' }, { title: 'Acceso rápido por internet a información relacionada con sus cargas a través de nuestro sistema de monitoreo', icon: 'fa fa-internet-explorer' }, { title: 'Espacio para almacenamiento de trailers de todos tamaños en Tijuana y San Diego, protegido con personal de seguridad y camaras de circuito cerrado', icon: 'fa fa-hdd-o' }, { title: 'Vigilancia las 24 horas en nuestras instalaciones', icon: 'fa fa-user-secret' }, { title: 'Aseguranza para su mercancía incluida', icon: 'fa fa-shield' }];

/*
<Col md={4}>
  <Card>
    <CardText>
      <div className='card-content'>
        {ser}
      </div>
    </CardText>
  </Card>
</Col>*/

var Services = function Services() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement('div', { className: 'heading-text' }, _react2.default.createElement('h1', null, 'En Transportes Toroco estamos comprometidos a proporcionar un excelente servicio y si nos elige como su compa\xF1\xEDa de transporte de carga estos ser\xE1n algunos de sus beneficios: '))), _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_reactGridSystem.Row, null, services.map(function (ser) {
    return _react2.default.createElement(_reactGridSystem.Col, { md: 4 }, _react2.default.createElement('div', { className: 'card' }, _react2.default.createElement('div', { className: 'card-content' }, ser.title, _react2.default.createElement(_reactGridSystem.Row, null, _react2.default.createElement(_reactGridSystem.Col, { md: 12 }, _react2.default.createElement('i', { className: ser.icon, 'aria-hidden': 'true' }))))));
  })))), _react2.default.createElement('style', null, '\n      body {\n        font-family: Roboto;\n      }\n      .heading-text {\n        text-align:center;\n        color: gray;\n        font-size: 20px;\n        padding: 100px;\n      }\n      .card{\n        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n        transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n        height: 200px;\n        margin-top:30px;\n      }\n      .card-content {\n        text-align:center;\n        padding:50px;\n        font-size:20px;\n      }\n      .card:hover {\n        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n\n      }\n    '));
};

exports.default = Services;