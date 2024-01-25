"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modale2.css");
// Modale2.js

const Modale2 = _ref => {
  let {
    visible,
    onClose
  } = _ref;
  const closeModal = () => {
    onClose();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation"
  }, visible && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Employee Created!"), /*#__PURE__*/_react.default.createElement("span", {
    onClick: closeModal
  }, "X")));
};
var _default = exports.default = Modale2;