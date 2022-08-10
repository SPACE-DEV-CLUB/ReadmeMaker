import { atom } from 'recoil';
import { v4 as uuid } from 'uuid';

export const componentsState = atom({
  key: 'componentsState',
  default: [
    {
      TemplateId: 1,
      author: 'shields.io',
      code: "<img src='https://img.shields.io/github/followers/%user%?label=follow&style=social'/>",
      createdAt: '2022-08-03T13:39:05.000Z',
      description:
        'A service for concise, consistent, and legible badges in SVG and raster format, which can easily be included in GitHub readmes or any other web page.',
      editorType: 'badge',
      id: `${uuid()}`,
      image:
        'https://user-images.githubusercontent.com/47337588/172857390-af8bb997-8db5-4d6f-b740-a581940c2724.png',
      inputVariables: { '%user%': '' },
      like: 110,
      link: 'https://shields.io/',
      title: 'Github Followers',
      type: 'badge',
      updatedAt: '2022-08-08T07:45:57.000Z',
      variable: '%user%',
    },
  ],
});
