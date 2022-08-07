import '@emotion/react';
import { Font, ColorTheme, BreakPointType } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorTheme;
    fontSize: Font;
    breakPoint: BreakPointType;
  }
}
