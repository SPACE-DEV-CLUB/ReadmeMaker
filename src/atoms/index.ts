import { atom } from 'recoil';

export const cartListState = atom({
  key: 'cartListState',
  default: ['', '', ''],
});

export const modalState = atom({
  key: 'modalState',
  default: [false, false],
});
