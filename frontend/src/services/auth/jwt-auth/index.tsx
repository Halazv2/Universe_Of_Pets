import axios from 'axios';

export const jwtAxios = axios.create({
  baseURL: 'http://localhost:4000/api/admin', // YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('access_token')
  }
});

jwtAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data.message === 'Unauthorized!') {
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);
export const setAuthToken = (token?: string) => {
  if (token) {
    jwtAxios.defaults.headers.common['x-access-token'] = token;
    localStorage.setItem('access_token', token);
  } else {
    delete jwtAxios.defaults.headers.common.Authorization;
    localStorage.removeItem('access_token');
  }
};
