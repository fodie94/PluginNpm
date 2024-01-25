"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Modale2.css");
const Modale2 = () => {
  const [modalVisible, setModalVisible] = (0, _react.useState)(true);
  const closeModal = () => {
    setModalVisible(false);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation"
  }, modalVisible && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Employee Created!"), /*#__PURE__*/_react.default.createElement("span", {
    onClick: closeModal
  }, "X")));
};
var _default = exports.default = Modale2;