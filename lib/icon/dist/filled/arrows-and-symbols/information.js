"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Information = function (_a) {
    var id = _a.id, className = _a.className;
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 16 16", width: "1em", height: "1em" }, { id: id, className: className }),
        react_1.default.createElement("path", { d: "M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-.363 1.551a1.312 1.312 0 0 1 0 2.622 1.314 1.314 0 0 1-1.312-1.312c0-.722.588-1.31 1.312-1.31zm2.545 12.306H5.819a.95.95 0 0 1-.949-.947.95.95 0 0 1 .949-.948h1.234v-4.65h-.508a.949.949 0 0 1 0-1.896H8a.95.95 0 0 1 .947.949l-.005 5.597h1.24a.949.949 0 0 1 0 1.895z", fill: "currentColor" })));
};
exports.default = Information;
//# sourceMappingURL=information.js.map