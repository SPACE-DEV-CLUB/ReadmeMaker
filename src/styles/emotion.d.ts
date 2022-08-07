import '@emotion/react';
import { Font, ColorTheme } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorTheme;
    fontSize: Font;
  }
}
