"use client";
import MainApiService from "utils/MainApiService";
import { SERVICE_URL_SLASH } from "serviceEndPoints/ServiceEndPoints";

const getPost = async () => {
  return await MainApiService.get(`${SERVICE_URL_SLASH.POSTS}`);
};

const getPostWithUrlParameter = async ({ page, size }) => {
  let url = "https://blog-api-testing.squadcodersdev.com/api/posts";
  const queryParams = {};
  if (page !== undefined) queryParams.page = page;
  if (size !== undefined) queryParams.size = size;
  const newQuery = new URLSearchParams(queryParams).toString();
  if (queryParams) {
    url += `?${newQuery}`;
  }
  const response = await axios.get(url);
  return response.data;
};

const getPostById = async (id) => {
  return await MainApiService.get(`${SERVICE_URL_SLASH.POSTS}/${id}`);
};

const addPost = async (data = {}) => {
  return await MainApiService.post(`${SERVICE_URL_SLASH.POSTS}`, data);
};

const editPost = async (id, data = {}) => {
  return await MainApiService.put(`${SERVICE_URL_SLASH.POSTS}/${id}`, data);
};

const editPartialPost = async (id, data = {}) => {
  return await MainApiService.patch(`${SERVICE_URL_SLASH.POSTS}/${id}`, data);
};

const deletePost = async (id) => {
  return await MainApiService.delete(`${SERVICE_URL_SLASH.POSTS}/${id}`);
};

export const PostService = {
  getPost,
  addPost,
  editPost,
  editPartialPost,
  deletePost,
  getPostById,
  getPostWithUrlParameter,
};
