"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
require("./Modal.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    text = _ref.text,
    button = _ref.button,
    cross = _ref.cross,
    mainBackgroundColor = _ref.mainBackgroundColor,
    shadowModalColor = _ref.shadowModalColor,
    buttonColor = _ref.buttonColor,
    buttonText = _ref.buttonText;
  var ModalWrapper = _styledComponents["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: fixed;\n        justify-content: center;\n        align-items: center;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 10;\n        background-color: #", "BF;\n        transition: all 0.25s ease-in-out;\n    "])), mainBackgroundColor ? mainBackgroundColor : "000000");
  var Modal = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        position: relative;\n        z-index: 20;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n        padding: 30px 45px;\n        border-radius: 20px;\n        background-color: white;\n        box-shadow: 0 0 10px #", ";\n    "])), shadowModalColor ? shadowModalColor : "000000");
  var ButtonCross = _styledComponents["default"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        background-color: #", ";\n        color: white;\n        padding: 7px 10px;\n        border-radius: 100%;\n        border: 2px solid transparent;\n        transition: all 0.25s ease-in-out;\n        position: absolute;\n        top: -14px;\n        right: -17px;\n\n        &:hover {\n            background-color: white;\n            color: #", ";\n            border: 2px solid #", ";\n            cursor: pointer;\n        }\n    "])), buttonColor ? buttonColor : "000000", buttonColor ? buttonColor : "000000", buttonColor ? buttonColor : "000000");
  var ButtonConfirmation = _styledComponents["default"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        margin-top: 25px;\n        background-color: #", ";\n        color: white;\n        padding: 5px 10px;\n        border-radius: 5px;\n        border: 2px solid transparent;\n        transition: all 0.25s ease-in-out;\n\n        &:hover {\n            background-color: white;\n            color: #", ";\n            border: 2px solid #", ";\n            cursor: pointer;\n        }\n    "])), buttonColor ? buttonColor : "000000", buttonColor ? buttonColor : "000000", buttonColor ? buttonColor : "000000");
  return /*#__PURE__*/_react["default"].createElement(ModalWrapper, {
    className: isOpen ? "modal-open" : "modal-close"
  }, /*#__PURE__*/_react["default"].createElement(Modal, null, cross && /*#__PURE__*/_react["default"].createElement(ButtonCross, {
    onClick: onClose
  }, "X"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "modal-text"
  }, text), (button || cross === undefined) && /*#__PURE__*/_react["default"].createElement(ButtonConfirmation, {
    onClick: onClose
  }, buttonText === undefined ? "Ok" : buttonText)));
}
Modal.propTypes = {
  text: _propTypes["default"].string.isRequired
};