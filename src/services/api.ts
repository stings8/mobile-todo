import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://argo-todolist-e8148d0054ab.herokuapp.com/',
});

export const isApiError = (error: Error) => error instanceof AxiosError;

export default api;
