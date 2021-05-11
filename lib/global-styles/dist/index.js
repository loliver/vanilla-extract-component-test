"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_html_body_classname_1 = require("react-html-body-classname");
require("normalize.css");
var vanilla_theme_context_1 = require("./vanilla-theme-context");
require("./global.css");
var GlobalStyles = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (react_1.default.createElement(vanilla_theme_context_1.VanillaThemeProvider, { value: theme },
        react_1.default.createElement(react_html_body_classname_1.HtmlClassName, { className: theme, id: "ocean-blue-global-styles" },
            react_1.default.createElement("div", null, children))));
};
exports.default = GlobalStyles;
//# sourceMappingURL=index.js.map