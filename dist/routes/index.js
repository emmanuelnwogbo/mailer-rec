"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _contact = _interopRequireDefault(require("./contact"));
var _services = _interopRequireDefault(require("./services"));
var _ipos = _interopRequireDefault(require("./ipos"));
var _stock = _interopRequireDefault(require("./stock"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  contact: _contact["default"],
  services: _services["default"],
  ipos: _ipos["default"],
  stock: _stock["default"]
};
exports["default"] = _default;