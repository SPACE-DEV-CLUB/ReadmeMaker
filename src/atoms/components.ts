import { v4 as uuid } from 'uuid';
import { atom } from 'recoil';

export const componentsState = atom({
  key: 'componentsState',
  default: [
    {
      id: `${uuid()}`,
      code: '',
      type: 'text',
    },
    {
      id: `${uuid()}`,
      title: 'github stats',
      code: `<img src='https://github-readme-stats.vercel.app/api?username=variable&amp;hide=contribs,prs'/>`,
      type: 'img',
      description: '깃허브 여러 스탯을 보여줍니다.',
      image:
        'https://user-images.githubusercontent.com/93420227/171349971-0b390501-bea7-4af6-b25f-44a457554097.png',
      link: 'https://dfksjhfdks.com',
      author: 'deli-ght',
      related_comp: [1, 4, 8],
      src: 'https://github-readme-stats.vercel.app/api?username=variable&amp;hide=contribs,prs',
      tags: ['game', 'gentle'],
      registered_date: '2022-06-20',
      expired: true,
      like: 3,
    },
  ],
});
