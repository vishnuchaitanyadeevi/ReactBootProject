import axios from 'axios';
import { LOCAL_STORAGE_KEYS } from './constants';

// const handleErrorResponse = async (err) => (err?.response ? err?.response : err);

const logoutUser = () => {
  localStorage.clear();
  window.location.reload();
};

const handleErrorResponse = async (err, req) => {
  if (err.response) {
    if (err.response.status === 401) {
      logoutUser();
    }
  } else {
    return err;
  }
};

const handleSuccessResponse = (res) => res;

const headersObj = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

const returnTokenWithBearer = (token) => `Bearer ${token}`;

// get method

export const getData = (url) => {
  headersObj.Authorization = returnTokenWithBearer(localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN_KEY));
  return axios
    .get(url, {
      headers: headersObj
    })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err, { type: 'GET', url }));
};

// post method

export const postData = (url, body, isLogin = false) => {
  headersObj.Authorization = returnTokenWithBearer(localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN_KEY));

  return axios
    .post(url, body, {
      headers: headersObj
    })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err), { type: 'POST', url, body });
};
