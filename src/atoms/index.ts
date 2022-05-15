import { atom, selector } from 'recoil';

export const cartListState = atom({
  key: 'cartListState',
  default: ['', '', ''],
});
