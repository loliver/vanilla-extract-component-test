"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colMd1 = exports.colSm12 = exports.colSm11 = exports.colSm10 = exports.colSm9 = exports.colSm8 = exports.colSm7 = exports.colSm6 = exports.colSm5 = exports.colSm4 = exports.colSm3 = exports.colSm2 = exports.colSm1 = exports.colXs12 = exports.colXs11 = exports.colXs10 = exports.colXs9 = exports.colXs8 = exports.colXs7 = exports.colXs6 = exports.colXs5 = exports.colXs4 = exports.colXs3 = exports.colXs2 = exports.colXs1 = exports.lg12 = exports.lg6 = exports.lg4 = exports.lg3 = exports.lg2 = exports.lg1 = exports.md12 = exports.md6 = exports.md4 = exports.md3 = exports.md2 = exports.md1 = exports.sm12 = exports.sm6 = exports.sm4 = exports.sm3 = exports.sm2 = exports.sm1 = exports.xs12 = exports.xs6 = exports.xs4 = exports.xs3 = exports.xs2 = exports.xs1 = exports.grid = void 0;
exports.newRow = exports.colLg12 = exports.colLg11 = exports.colLg10 = exports.colLg9 = exports.colLg8 = exports.colLg7 = exports.colLg6 = exports.colLg5 = exports.colLg4 = exports.colLg3 = exports.colLg2 = exports.colLg1 = exports.colMd12 = exports.colMd11 = exports.colMd10 = exports.colMd9 = exports.colMd8 = exports.colMd7 = exports.colMd6 = exports.colMd5 = exports.colMd4 = exports.colMd3 = exports.colMd2 = void 0;
var css_1 = require("@vanilla-extract/css");
exports.grid = css_1.style({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: '16px',
    gridAutoColumns: '100%',
    transition: 'grid-gap 0.2s',
    '@media': {
        'screen and (min-width: 768px)': {
            gridGap: '32px'
        }
    }
});
exports.xs1 = css_1.style({
    gridTemplateColumns: 'repeat(1, 1fr)'
});
exports.xs2 = css_1.style({
    gridTemplateColumns: 'repeat(2, 1fr)'
});
exports.xs3 = css_1.style({
    gridTemplateColumns: 'repeat(3, 1fr)'
});
exports.xs4 = css_1.style({
    gridTemplateColumns: 'repeat(4, 1fr)'
});
exports.xs6 = css_1.style({
    gridTemplateColumns: 'repeat(6, 1fr)'
});
exports.xs12 = css_1.style({
    gridTemplateColumns: 'repeat(12, 1fr)'
});
exports.sm1 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridTemplateColumns: 'repeat(1, 1fr)'
        }
    }
});
exports.sm2 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
        }
    }
});
exports.sm3 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridTemplateColumns: 'repeat(3, 1fr)'
        }
    }
});
exports.sm4 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridTemplateColumns: 'repeat(4, 1fr)'
        }
    }
});
exports.sm6 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridTemplateColumns: 'repeat(6, 1fr)'
        }
    }
});
exports.sm12 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridTemplateColumns: 'repeat(12, 1fr)'
        }
    }
});
exports.md1 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridTemplateColumns: 'repeat(1, 1fr)'
        }
    }
});
exports.md2 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
        }
    }
});
exports.md3 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridTemplateColumns: 'repeat(3, 1fr)'
        }
    }
});
exports.md4 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridTemplateColumns: 'repeat(4, 1fr)'
        }
    }
});
exports.md6 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridTemplateColumns: 'repeat(6, 1fr)'
        }
    }
});
exports.md12 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridTemplateColumns: 'repeat(12, 1fr)'
        }
    }
});
exports.lg1 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridTemplateColumns: 'repeat(1, 1fr)'
        }
    }
});
exports.lg2 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
        }
    }
});
exports.lg3 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridTemplateColumns: 'repeat(3, 1fr)'
        }
    }
});
exports.lg4 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridTemplateColumns: 'repeat(4, 1fr)'
        }
    }
});
exports.lg6 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridTemplateColumns: 'repeat(6, 1fr)'
        }
    }
});
exports.lg12 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridTemplateColumns: 'repeat(12, 1fr)'
        }
    }
});
exports.colXs1 = css_1.style({
    gridColumn: 'auto / span 1'
});
exports.colXs2 = css_1.style({
    gridColumn: 'auto / span 2'
});
exports.colXs3 = css_1.style({
    gridColumn: 'auto / span 3'
});
exports.colXs4 = css_1.style({
    gridColumn: 'auto / span 4'
});
exports.colXs5 = css_1.style({
    gridColumn: 'auto / span 5'
});
exports.colXs6 = css_1.style({
    gridColumn: 'auto / span 6'
});
exports.colXs7 = css_1.style({
    gridColumn: 'auto / span 7'
});
exports.colXs8 = css_1.style({
    gridColumn: 'auto / span 8'
});
exports.colXs9 = css_1.style({
    gridColumn: 'auto / span 9'
});
exports.colXs10 = css_1.style({
    gridColumn: 'auto / span 10'
});
exports.colXs11 = css_1.style({
    gridColumn: 'auto / span 11'
});
exports.colXs12 = css_1.style({
    gridColumn: 'auto / span 12'
});
exports.colSm1 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 1'
        }
    }
});
exports.colSm2 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 2'
        }
    }
});
exports.colSm3 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 3'
        }
    }
});
exports.colSm4 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 4'
        }
    }
});
exports.colSm5 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 5'
        }
    }
});
exports.colSm6 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 6'
        }
    }
});
exports.colSm7 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 7'
        }
    }
});
exports.colSm8 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 8'
        }
    }
});
exports.colSm9 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 9'
        }
    }
});
exports.colSm10 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 10'
        }
    }
});
exports.colSm11 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 11'
        }
    }
});
exports.colSm12 = css_1.style({
    '@media': {
        'screen and (min-width: 480px)': {
            gridColumn: 'auto / span 12'
        }
    }
});
exports.colMd1 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 1'
        }
    }
});
exports.colMd2 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 2'
        }
    }
});
exports.colMd3 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 3'
        }
    }
});
exports.colMd4 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 4'
        }
    }
});
exports.colMd5 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 5'
        }
    }
});
exports.colMd6 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 6'
        }
    }
});
exports.colMd7 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 7'
        }
    }
});
exports.colMd8 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 8'
        }
    }
});
exports.colMd9 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 9'
        }
    }
});
exports.colMd10 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 10'
        }
    }
});
exports.colMd11 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 11'
        }
    }
});
exports.colMd12 = css_1.style({
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumn: 'auto / span 12'
        }
    }
});
exports.colLg1 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 1'
        }
    }
});
exports.colLg2 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 2'
        }
    }
});
exports.colLg3 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 3'
        }
    }
});
exports.colLg4 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 4'
        }
    }
});
exports.colLg5 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 5'
        }
    }
});
exports.colLg6 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 6'
        }
    }
});
exports.colLg7 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 7'
        }
    }
});
exports.colLg8 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 8'
        }
    }
});
exports.colLg9 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 9'
        }
    }
});
exports.colLg10 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 10'
        }
    }
});
exports.colLg11 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 11'
        }
    }
});
exports.colLg12 = css_1.style({
    '@media': {
        'screen and (min-width: 960px)': {
            gridColumn: 'auto / span 12'
        }
    }
});
exports.newRow = css_1.style({
    gridColumnStart: '1 !important',
    gridRowStart: 'auto'
});
//# sourceMappingURL=grid.css.js.map