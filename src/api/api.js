import axios from "axios";
import { ADMIN_ID, BASE_URL } from "../constants";

export const register = (requestBody) => {
  return axios.post(`${BASE_URL}user/register`, requestBody);
};

export const login = (requestBody) => {
  return axios.post(`${BASE_URL}user/login`, requestBody);
};

export const logout = (requestBody) => {
  return axios.get(`${BASE_URL}user/logout`, requestBody);
};

export const getCategories = () => {
  return axios.get(`${BASE_URL}post/category`);
};

export const getItemsByCategory = (categorySlug) => {
  return axios.get(`${BASE_URL}post/category/${categorySlug}/posts`);
};

export const getAllItems = () => {
  return axios.get(`${BASE_URL}post`);
};

export const addItem = (requestBody) => {
  return axios.post(`${BASE_URL}admin/${ADMIN_ID}/post`, requestBody);
};

export const deleteItem = (productId) => {
  return axios.get(`${BASE_URL}admin/${productId}/delete`);
};

export const editItem = (productId, requestBody) => {
  return axios.post(`${BASE_URL}admin/${productId}/edit`, requestBody);
};
