import { atom } from 'recoil';
import { Component } from 'types/component';

export const cartListState = atom<Component[]>({
  key: 'cartListState',
  default: [],
});

export const modalStates = atom({
  key: 'modalState',
  default: [false, false],
});
