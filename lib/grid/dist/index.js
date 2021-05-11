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
exports.Column = exports.Grid = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var styles = __importStar(require("./grid.css"));
var Grid = function (_a) {
    var _b;
    var children = _a.children, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg;
    return (react_1.default.createElement("div", { className: classnames_1.default((_b = {},
            _b[styles.grid] = true,
            _b[styles.xs1] = xs === 1,
            _b[styles.xs2] = xs === 2,
            _b[styles.xs3] = xs === 3,
            _b[styles.xs4] = xs === 4,
            _b[styles.xs6] = xs === 6,
            _b[styles.xs12] = xs === 12,
            _b[styles.sm1] = sm === 1,
            _b[styles.sm2] = sm === 2,
            _b[styles.sm3] = sm === 3,
            _b[styles.sm4] = sm === 4,
            _b[styles.sm6] = sm === 6,
            _b[styles.sm12] = sm === 12,
            _b[styles.md1] = md === 1,
            _b[styles.md2] = md === 2,
            _b[styles.md3] = md === 3,
            _b[styles.md4] = md === 4,
            _b[styles.md6] = md === 6,
            _b[styles.md12] = md === 12,
            _b[styles.lg1] = lg === 1,
            _b[styles.lg2] = lg === 2,
            _b[styles.lg3] = lg === 3,
            _b[styles.lg4] = lg === 4,
            _b[styles.lg6] = lg === 6,
            _b[styles.lg12] = lg === 12,
            _b)) }, children));
};
exports.Grid = Grid;
var Column = function (_a) {
    var _b;
    var children = _a.children, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, newRow = _a.newRow;
    return (react_1.default.createElement("div", { className: classnames_1.default((_b = {},
            _b[styles.colXs1] = xs === 1,
            _b[styles.colXs2] = xs === 2,
            _b[styles.colXs3] = xs === 3,
            _b[styles.colXs4] = xs === 4,
            _b[styles.colXs5] = xs === 5,
            _b[styles.colXs6] = xs === 6,
            _b[styles.colXs7] = xs === 7,
            _b[styles.colXs8] = xs === 8,
            _b[styles.colXs9] = xs === 9,
            _b[styles.colXs10] = xs === 10,
            _b[styles.colXs11] = xs === 11,
            _b[styles.colXs12] = xs === 12,
            _b[styles.colSm1] = sm === 1,
            _b[styles.colSm2] = sm === 2,
            _b[styles.colSm3] = sm === 3,
            _b[styles.colSm4] = sm === 4,
            _b[styles.colSm5] = sm === 5,
            _b[styles.colSm6] = sm === 6,
            _b[styles.colSm7] = sm === 7,
            _b[styles.colSm8] = sm === 8,
            _b[styles.colSm9] = sm === 9,
            _b[styles.colSm10] = sm === 10,
            _b[styles.colSm11] = sm === 11,
            _b[styles.colSm12] = sm === 12,
            _b[styles.colMd1] = md === 1,
            _b[styles.colMd2] = md === 2,
            _b[styles.colMd3] = md === 3,
            _b[styles.colMd4] = md === 4,
            _b[styles.colMd5] = md === 5,
            _b[styles.colMd6] = md === 6,
            _b[styles.colMd7] = md === 7,
            _b[styles.colMd8] = md === 8,
            _b[styles.colMd9] = md === 9,
            _b[styles.colMd10] = md === 10,
            _b[styles.colMd11] = md === 11,
            _b[styles.colMd12] = md === 12,
            _b[styles.colLg1] = lg === 1,
            _b[styles.colLg2] = lg === 2,
            _b[styles.colLg3] = lg === 3,
            _b[styles.colLg4] = lg === 4,
            _b[styles.colLg5] = lg === 5,
            _b[styles.colLg6] = lg === 6,
            _b[styles.colLg7] = lg === 7,
            _b[styles.colLg8] = lg === 8,
            _b[styles.colLg9] = lg === 9,
            _b[styles.colLg10] = lg === 10,
            _b[styles.colLg11] = lg === 11,
            _b[styles.colLg12] = lg === 12,
            _b[styles.newRow] = newRow,
            _b)) }, children));
};
exports.Column = Column;
//# sourceMappingURL=index.js.map