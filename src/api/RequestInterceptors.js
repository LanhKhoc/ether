import axios from 'axios';
import { REQUEST_HEADER } from 'config/constant';

import {
  Error401
} from './HandleRequestFail';

axios.interceptors.request.use((config) => {
  const token = _store.getState().session.userAuth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  Object.assign(config.headers, REQUEST_HEADER);
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  const statusCode = error.status;
  switch (statusCode) {
    case 401: return Error401();
    case 403: break;
    case 404: break;
    case 500: break;
    default: break;
  }
  return Promise.reject(error.response.data);
});