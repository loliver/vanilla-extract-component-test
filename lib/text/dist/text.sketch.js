"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jsx-a11y/label-has-for */
var react_1 = __importDefault(require("react"));
var index_1 = require("./index");
var Examples = function () { return (react_1.default.createElement("div", { style: {
        margin: '8px',
        display: 'inline-block',
        height: '100px',
        maxWidth: '960px'
    } },
    react_1.default.createElement(index_1.H1, null, "Text"),
    react_1.default.createElement("div", { "data-sketch-text": "Heading 1/Deep current" },
        react_1.default.createElement(index_1.H1, null, "Heading 1")),
    react_1.default.createElement("div", { "data-sketch-text": "Heading 2/Deep current" },
        react_1.default.createElement(index_1.H2, null, "Heading 2")),
    react_1.default.createElement("div", { "data-sketch-text": "Heading 3/Deep current" },
        react_1.default.createElement(index_1.H3, null, "Heading 3")),
    react_1.default.createElement("div", { "data-sketch-text": "Heading 1/White" },
        react_1.default.createElement(index_1.H1, { invert: true }, "Heading 1")),
    react_1.default.createElement("div", { "data-sketch-text": "Heading 2/White" },
        react_1.default.createElement(index_1.H2, { invert: true }, "Heading 2")),
    react_1.default.createElement("div", { "data-sketch-text": "Heading 3/White" },
        react_1.default.createElement(index_1.H3, { invert: true }, "Heading 3")),
    react_1.default.createElement("div", { "data-sketch-text": "Paragraph" },
        react_1.default.createElement(index_1.P, null, "Paragraph")),
    react_1.default.createElement("div", { "data-sketch-text": "Label" },
        react_1.default.createElement(index_1.Label, null, "Label")),
    react_1.default.createElement("div", { "data-sketch-text": "Legend" },
        react_1.default.createElement(index_1.Legend, null, "Legend")))); };
exports.default = Examples;
//# sourceMappingURL=text.sketch.js.map