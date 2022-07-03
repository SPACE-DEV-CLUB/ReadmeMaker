import axios from 'axios';
import { API_ENDPOINT } from 'constants/index';
import { Component } from 'types/component';

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
