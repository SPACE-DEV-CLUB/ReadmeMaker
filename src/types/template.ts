import { Component } from './component';

export interface Template {
  Components: TemplateComponent[];
  TemplateTags: TemplateTag[];
  author: string;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  like: number;
  link: string;
  title: string;
  updatedAt: string;
}

export interface TemplateComponent extends Component {
  TemplateId: number;
}

export interface TemplateTag {
  id: number;
  title: string;
  createdAt: string;
  Theme_Tag: ThemeTag;
}

interface ThemeTag {
  createdAt: string;
  template_id: number;
  template_tags_id: number;
  updatedAt: string;
}
