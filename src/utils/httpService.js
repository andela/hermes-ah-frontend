import axios from 'axios';

axios.defaults.baseURL = 'https://hermes-ah-backend.herokuapp.com/api/v1';

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
