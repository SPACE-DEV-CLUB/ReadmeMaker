import { atom } from 'recoil';
import { darkTheme } from 'styles/theme';
import { Component } from 'types/component';

export const cartListState = atom<Component[]>({
  key: 'cartListState',
  default: [],
});

export const modalStates = atom({
  key: 'modalState',
  default: [false, false],
});

export const darkModeState = atom({
  key: 'darkModeState',
  default: darkTheme,
});
