"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
// src/lib/components/Modale.js

const Modale = _ref => {
  let {
    nom,
    prenom,
    age,
    onClose
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modale"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Informations"), /*#__PURE__*/_react.default.createElement("p", null, "Nom: ", nom), /*#__PURE__*/_react.default.createElement("p", null, "Pr\xE9nom: ", prenom), /*#__PURE__*/_react.default.createElement("p", null, "\xC2ge: ", age), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose
  }, "Fermer")));
};
var _default = exports.default = Modale;