import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

const setDefaultToken = token => {
  axios.defaults.headers.common.token = token;
};

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.delete,
  patch: axios.patch,
  setDefaultToken,
};
