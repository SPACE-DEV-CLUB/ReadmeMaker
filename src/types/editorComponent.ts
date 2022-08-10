export interface ComponentType {
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
  editorType: string;
}

export interface BadgeComponentType extends ComponentType {
  inputVariables: { [key: string]: string };
}

export interface TextComponentType {
  id: string;
  code: string;
  type: string;
  editorType: string;
}
