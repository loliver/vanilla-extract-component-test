"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playroomExample = exports.default = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var playroomExample = "<Grid>\n    <Column xs={12} sm={6} md={4} lg={3}>\n      <div style={{background: '#f0faff', 'border-radius': '3px', padding: '16px', margin: '0 0 16px', border: '1px solid #93c7e5'}}>Column 1</div>\n    </Column>\n    <Column xs={12} sm={6} md={4} lg={3}>\n      <div style={{background: '#f0faff', 'border-radius': '3px', padding: '16px', margin: '0 0 16px', border: '1px solid #93c7e5'}}>Column 2</div>\n    </Column>\n    <Column xs={12} sm={6} md={4} lg={3}>\n      <div style={{background: '#f0faff', 'border-radius': '3px', padding: '16px', margin: '0 0 16px', border: '1px solid #93c7e5'}}>Column 3</div>\n    </Column>\n    <Column xs={12} sm={6} md={4} lg={3}>\n      <div style={{background: '#f0faff', 'border-radius': '3px', padding: '16px', margin: '0 0 16px', border: '1px solid #93c7e5'}}>Column 4</div>\n    </Column>\n</Grid>";
exports.playroomExample = playroomExample;
var divStyle = {
    background: '#f0faff',
    borderRadius: '3px',
    padding: '16px',
    margin: '0 0 16px',
    border: '1px solid #93c7e5'
};
var Doc = function () { return (react_1.default.createElement(index_1.Grid, null,
    react_1.default.createElement(index_1.Column, { xs: 12, sm: 6, md: 4, lg: 3 },
        react_1.default.createElement("div", { style: divStyle }, "Column 1")),
    react_1.default.createElement(index_1.Column, { xs: 12, sm: 6, md: 4, lg: 3 },
        react_1.default.createElement("div", { style: divStyle }, "Column 2")),
    react_1.default.createElement(index_1.Column, { xs: 12, sm: 6, md: 4, lg: 3 },
        react_1.default.createElement("div", { style: divStyle }, "Column 3")),
    react_1.default.createElement(index_1.Column, { xs: 12, sm: 6, md: 4, lg: 3 },
        react_1.default.createElement("div", { style: divStyle }, "Column 4")))); };
exports.default = Doc;
//# sourceMappingURL=index.js.map