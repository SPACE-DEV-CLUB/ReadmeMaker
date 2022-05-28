import { v4 as uuid } from 'uuid';
import { atom } from 'recoil';

export const postsState = atom({
  key: 'postState',
  default: [
    {
      id: `${uuid()}`,
      code: '',
    },
  ],
});
