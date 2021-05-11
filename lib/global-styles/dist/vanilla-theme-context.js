"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVanillaTheme = exports.VanillaThemeProvider = void 0;
var react_1 = require("react");
var VanillaThemeContext = react_1.createContext(null);
exports.VanillaThemeProvider = VanillaThemeContext.Provider;
var useVanillaTheme = function () {
    var themeClass = react_1.useContext(VanillaThemeContext);
    if (themeClass === null) {
        throw new Error('Must be inside VanillaThemeProvider');
    }
    return themeClass;
};
exports.useVanillaTheme = useVanillaTheme;
//# sourceMappingURL=vanilla-theme-context.js.map