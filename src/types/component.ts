export interface Component {
  ComponentTags: ComponentTag[];
  TemplateId: number;
  author: string;
  code: string;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  like: number;
  link: string;
  related_template: number;
  title: string;
  type: string;
  updatedAt: string;
  varaiable: string;
}

export interface ComponentTag extends Tag {
  Function_Tag: FunctionTag;
}

export interface Tag {
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
}
export interface FunctionTag {
  component_id: number;
  component_tags_id: number;
  createdAt: string;
  updatedAt: string;
}
