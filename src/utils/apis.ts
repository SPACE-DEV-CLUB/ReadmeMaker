import axios from 'axios';
import { API_ENDPOINT } from 'constants/index';
import { Component } from 'types/component';
import { Template } from 'types/template';

export const getComponents = async () => {
  const response = await axios.get<Component[]>(`${API_ENDPOINT}/component`);
  const data = await response.data;
  return data;
};

export const getComponentTags = async () => {
  const response = await axios.get(`${API_ENDPOINT}/component_tags`);
  const data = await response.data;
  return data;
};

export const getTemplates = async () => {
  const response = await axios.get<Template[]>(`${API_ENDPOINT}/template`);
  const data = await response.data;
  return data;
};
