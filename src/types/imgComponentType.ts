export interface ImgComponentType {
  id: string;
  title: string;
  code: string;
  type: string;
  username: string;
  description: string;
  image: string;
  link: string;
  author: string;
  related_comp: Array<number>;
  src: string;
  tags: Array<string>;
  registered_date: string;
  expired: boolean;
  like: number;
}
