import axios from 'axios';

axios.defaults.baseURL =
  'https://hermes-ah-backend-staging.herokuapp.com/api/v1';

export const setDefaultToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

const http = axios.create();

export default http;
