"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_1 = require("@vanilla-extract/css");
var design_tokens_css_1 = require("../../design-tokens/build/js/design-tokens.css");
css_1.globalStyle('body', {
    backgroundColor: design_tokens_css_1.vars.palette.background.default,
    margin: '0',
    fontFamily: design_tokens_css_1.vars.font.family.body,
    fontSize: design_tokens_css_1.vars.size.font.default,
    lineHeight: design_tokens_css_1.vars.size.lineheight.default,
    letterSpacing: '-0.3px',
    color: design_tokens_css_1.vars.palette.text.default,
    minWidth: '320px'
});
css_1.globalStyle("*, ::after, ::before", {
    boxSizing: 'border-box'
});
//# sourceMappingURL=global.css.js.map