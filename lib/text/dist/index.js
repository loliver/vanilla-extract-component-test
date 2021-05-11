"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subheadline = exports.Headline = exports.Footnote = exports.Caption2 = exports.Caption1 = exports.Callout = exports.Legend = exports.Label = exports.P = exports.H3 = exports.H2 = exports.H1 = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var styles = __importStar(require("./text.css"));
var H1 = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("h1", { className: classnames_1.default((_b = {},
            _b[styles.h1] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.headingBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.H1 = H1;
var H2 = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("h2", { className: classnames_1.default((_b = {},
            _b[styles.h2] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.headingBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.H2 = H2;
var H3 = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("h3", { className: classnames_1.default((_b = {},
            _b[styles.h3] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.headingBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.H3 = H3;
var P = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("p", { className: classnames_1.default((_b = {},
            _b[styles.body] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.bodyBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.P = P;
var Label = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children, htmlFor = _a.htmlFor;
    return (react_1.default.createElement("label", { className: classnames_1.default((_b = {},
            _b[styles.body] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.bodyBlock] = !inline && !zeroMargin,
            _b)), htmlFor: htmlFor }, children));
};
exports.Label = Label;
var Legend = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("legend", { className: classnames_1.default((_b = {},
            _b[styles.body] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.bodyBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.Legend = Legend;
var Callout = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("p", { className: classnames_1.default((_b = {},
            _b[styles.callout] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.bodyBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.Callout = Callout;
var Caption1 = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("p", { className: classnames_1.default((_b = {},
            _b[styles.caption1] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.bodyBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.Caption1 = Caption1;
var Caption2 = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("p", { className: classnames_1.default((_b = {},
            _b[styles.caption2] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.bodyBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.Caption2 = Caption2;
var Footnote = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("p", { className: classnames_1.default((_b = {},
            _b[styles.footnote] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.bodyBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.Footnote = Footnote;
var Headline = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("p", { className: classnames_1.default((_b = {},
            _b[styles.headline] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.bodyBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.Headline = Headline;
var Subheadline = function (_a) {
    var _b;
    var invert = _a.invert, fade = _a.fade, zeroMargin = _a.zeroMargin, inline = _a.inline, children = _a.children;
    return (react_1.default.createElement("p", { className: classnames_1.default((_b = {},
            _b[styles.subheadline] = true,
            _b[styles.invert] = invert,
            _b[styles.fade] = fade,
            _b[styles.zeroMargin] = zeroMargin,
            _b[styles.bodyBlock] = !inline && !zeroMargin,
            _b)) }, children));
};
exports.Subheadline = Subheadline;
//# sourceMappingURL=index.js.map