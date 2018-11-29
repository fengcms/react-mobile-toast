'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('./utils');

var _toast = require('./toast');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (tip, time) {
  // fixedBody(true)
  _reactDom2.default.render(_react2.default.createElement(_toast2.default, { tip: tip }), (0, _utils.createFrame)('fungleo-react-mibile-toast'));
};