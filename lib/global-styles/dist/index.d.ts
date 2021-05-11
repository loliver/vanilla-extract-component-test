/// <reference types="react" />
import 'normalize.css';
import './global.css';
import { GlobalStylesInterface } from './index.typed';
import '../typekit/index.css';
declare const GlobalStyles: ({ children, theme }: GlobalStylesInterface) => JSX.Element;
export default GlobalStyles;
