export const darkTheme = {
  MAIN_FONT: '#FFFFFF',
  PIN: '#F5FF80',
  BACKGROUND: '#0E1116',
  NAV_BACKGROUND: '#0E1116',
  CASUAL_LINE: '#20262F',
  CASUAL_FIELD: '#171B21',
  CASUAL_SUB_FIELD: '#1B2027',
  BUTTON_FIELD: '#2C3037',
  SHADOW: '',
  TYPE: 'dark',
};

export const lightTheme: ColorTheme = {
  MAIN_FONT: '#FFFFFF',
  PIN: '#F5FF80',
  BACKGROUND: 'linear-gradient(180deg, #ADE8DF 0%, #DCF8A4 73.81%)', // linear-gradient(180deg, #ADE8DF 0%, #DCF8A4 73.81%);그래디언트 기존꺼 안됨
  NAV_BACKGROUND: '#A5DCD2',
  CASUAL_LINE: '#FFFFFF;',
  CASUAL_FIELD: 'rgba(255, 255, 255, 0.08);',
  CASUAL_SUB_FIELD: 'rgba(255, 255, 255, 0.1);',
  BUTTON_FIELD: 'rgba(23, 27, 33, 0.1);',
  SHADOW: '0px 4px 20px rgba(0, 0, 0, 0.1);',
  TYPE: 'light',
};

const Color = {
  dark: darkTheme,
  light: lightTheme,
};

const mode = 'light' || 'dark';

export const colors = Color[mode];

export type ColorTheme = typeof darkTheme;

// font type

export const fontSize = {
  FONT_XSM: '10px',
  FONT_SM: '13px',
  FONT_MD: '16px',
  FONT_LG: '20px',
  FONT_XLG: '40px',
};

const theme = {
  colors,
  fontSize,
};

export default theme;

export type Font = typeof fontSize;
