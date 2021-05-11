"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyBlock = exports.headingBlock = exports.bold = exports.fade = exports.invert = exports.zeroMargin = exports.subheadline = exports.headline = exports.footnote = exports.caption2 = exports.caption1 = exports.callout = exports.body = exports.h3 = exports.h2 = exports.h1 = void 0;
var css_1 = require("@vanilla-extract/css");
var design_tokens_css_1 = require("../../design-tokens/build/js/design-tokens.css");
exports.h1 = css_1.style({
    fontFamily: design_tokens_css_1.vars.components.text.heading1.fontfamily,
    fontWeight: design_tokens_css_1.vars.components.text.heading1.weight,
    color: design_tokens_css_1.vars.components.text.heading1.color,
    lineHeight: design_tokens_css_1.vars.components.text.heading1.lineheight,
    letterSpacing: design_tokens_css_1.vars.components.text.heading1.letterspacing,
    fontSize: design_tokens_css_1.vars.components.text.heading1.size,
    transition: 'font-size 0.2s, line-height 0.2s, color 0.2s, opacity 0.2s'
}, 'text-h1');
exports.h2 = css_1.style({
    fontFamily: design_tokens_css_1.vars.components.text.heading2.fontfamily,
    fontWeight: design_tokens_css_1.vars.components.text.heading2.weight,
    color: design_tokens_css_1.vars.components.text.heading2.color,
    lineHeight: design_tokens_css_1.vars.components.text.heading2.lineheight,
    letterSpacing: design_tokens_css_1.vars.components.text.heading2.letterspacing,
    fontSize: design_tokens_css_1.vars.components.text.heading2.size,
    transition: 'font-size 0.2s, line-height 0.2s, color 0.2s, opacity 0.2s'
}, 'text-h2');
exports.h3 = css_1.style({
    fontFamily: design_tokens_css_1.vars.components.text.heading3.fontfamily,
    fontWeight: design_tokens_css_1.vars.components.text.heading3.weight,
    color: design_tokens_css_1.vars.components.text.heading3.color,
    lineHeight: design_tokens_css_1.vars.components.text.heading3.lineheight,
    letterSpacing: design_tokens_css_1.vars.components.text.heading3.letterspacing,
    fontSize: design_tokens_css_1.vars.components.text.heading3.size,
    transition: 'font-size 0.2s, line-height 0.2s, color 0.2s, opacity 0.2s'
}, 'text-h3');
exports.body = css_1.style({
    fontFamily: design_tokens_css_1.vars.components.text.body.fontfamily,
    fontWeight: design_tokens_css_1.vars.components.text.body.weight,
    color: design_tokens_css_1.vars.components.text.body.color,
    lineHeight: design_tokens_css_1.vars.components.text.body.lineheight,
    letterSpacing: design_tokens_css_1.vars.components.text.body.letterspacing,
    fontSize: design_tokens_css_1.vars.components.text.body.size,
    transition: 'font-size 0.2s, line-height 0.2s, color 0.2s, opacity 0.2s'
}, 'text-body');
exports.callout = css_1.style({
    fontFamily: design_tokens_css_1.vars.components.text.callout.fontfamily,
    fontWeight: design_tokens_css_1.vars.components.text.callout.weight,
    color: design_tokens_css_1.vars.components.text.callout.color,
    lineHeight: design_tokens_css_1.vars.components.text.callout.lineheight,
    letterSpacing: design_tokens_css_1.vars.components.text.callout.letterspacing,
    fontSize: design_tokens_css_1.vars.components.text.callout.size,
    transition: 'font-size 0.2s, line-height 0.2s, color 0.2s, opacity 0.2s'
}, 'text-callout');
exports.caption1 = css_1.style({
    fontFamily: design_tokens_css_1.vars.components.text.caption1.fontfamily,
    fontWeight: design_tokens_css_1.vars.components.text.caption1.weight,
    color: design_tokens_css_1.vars.components.text.caption1.color,
    lineHeight: design_tokens_css_1.vars.components.text.caption1.lineheight,
    letterSpacing: design_tokens_css_1.vars.components.text.caption1.letterspacing,
    fontSize: design_tokens_css_1.vars.components.text.caption1.size,
    transition: 'font-size 0.2s, line-height 0.2s, color 0.2s, opacity 0.2s'
}, 'text-caption1');
exports.caption2 = css_1.style({
    fontFamily: design_tokens_css_1.vars.components.text.caption2.fontfamily,
    fontWeight: design_tokens_css_1.vars.components.text.caption2.weight,
    color: design_tokens_css_1.vars.components.text.caption2.color,
    lineHeight: design_tokens_css_1.vars.components.text.caption2.lineheight,
    letterSpacing: design_tokens_css_1.vars.components.text.caption2.letterspacing,
    fontSize: design_tokens_css_1.vars.components.text.caption2.size,
    transition: 'font-size 0.2s, line-height 0.2s, color 0.2s, opacity 0.2s'
}, 'text-caption2');
exports.footnote = css_1.style({
    fontFamily: design_tokens_css_1.vars.components.text.footnote.fontfamily,
    fontWeight: design_tokens_css_1.vars.components.text.footnote.weight,
    color: design_tokens_css_1.vars.components.text.footnote.color,
    lineHeight: design_tokens_css_1.vars.components.text.footnote.lineheight,
    letterSpacing: design_tokens_css_1.vars.components.text.footnote.letterspacing,
    fontSize: design_tokens_css_1.vars.components.text.footnote.size,
    transition: 'font-size 0.2s, line-height 0.2s, color 0.2s, opacity 0.2s'
}, 'text-footnote');
exports.headline = css_1.style({
    fontFamily: design_tokens_css_1.vars.components.text.headline.fontfamily,
    fontWeight: design_tokens_css_1.vars.components.text.headline.weight,
    color: design_tokens_css_1.vars.components.text.headline.color,
    lineHeight: design_tokens_css_1.vars.components.text.headline.lineheight,
    letterSpacing: design_tokens_css_1.vars.components.text.headline.letterspacing,
    fontSize: design_tokens_css_1.vars.components.text.headline.size,
    transition: 'font-size 0.2s, line-height 0.2s, color 0.2s, opacity 0.2s'
}, 'text-headline');
exports.subheadline = css_1.style({
    fontFamily: design_tokens_css_1.vars.components.text.subheadline.fontfamily,
    fontWeight: design_tokens_css_1.vars.components.text.subheadline.weight,
    color: design_tokens_css_1.vars.components.text.subheadline.color,
    lineHeight: design_tokens_css_1.vars.components.text.subheadline.lineheight,
    letterSpacing: design_tokens_css_1.vars.components.text.subheadline.letterspacing,
    fontSize: design_tokens_css_1.vars.components.text.subheadline.size,
    transition: 'font-size 0.2s, line-height 0.2s, color 0.2s, opacity 0.2s'
}, 'text-subheadline');
exports.zeroMargin = css_1.style({
    margin: 0
}, 'text-zeroMargin');
exports.invert = css_1.style({
    color: design_tokens_css_1.vars.components.text.inverted.color
}, 'text-invert');
exports.fade = css_1.style({
    opacity: 0.5
}, 'text-fade');
exports.bold = css_1.style({
    fontWeight: 600
}, 'text-bold');
exports.headingBlock = css_1.style({
    margin: '2rem 0 1rem',
    selectors: {
        '&:first-child': {
            marginTop: 0
        }
    }
}, 'text-headingBlock');
exports.bodyBlock = css_1.style({
    margin: '1rem 0',
    selectors: {
        '&:first-child': {
            marginTop: 0
        }
    }
}, 'text-bodyBlock');
//# sourceMappingURL=text.css.js.map