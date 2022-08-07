import { atom } from 'recoil';
import { v4 as uuid } from 'uuid';
import { breakPoint, darkTheme, fontSize } from 'styles/theme';
import { Component } from 'types/component';

export const cartListState = atom<Component[]>({
  key: `cartListState${uuid()}`,
  default: [],
});

export const modalStates = atom({
  key: `modalState${uuid()}`,
  default: [false, false],
});

export const darkModeState = atom({
  key: `darkModeState${uuid()}`,
  default: {
    colors: darkTheme,
    fontSize: fontSize,
    breakPoint: breakPoint,
  },
});
