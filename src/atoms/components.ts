import { atom } from 'recoil';
import { v4 as uuid } from 'uuid';

export const componentsState = atom({
  key: 'componentsState',
  default: [
    {
      id: `${uuid()}`,
      code: '',
      type: 'text',
    },
  ],
});
