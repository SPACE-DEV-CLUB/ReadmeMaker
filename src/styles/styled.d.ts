import '@emotion/styled';
import { Theme } from './theme';

declare module '@emotion/styled' {
  export interface DefaultTheme {
    colors: Theme;
  }
}
