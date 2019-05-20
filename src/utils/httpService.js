import axios from 'axios';
import { getToken } from './authService';

const token = getToken();

const http = axios.create({
  baseURL: 'https://hermes-ah-backend-staging.herokuapp.com/api/v1',
  headers: { Authorization: token },
});

export default http;
