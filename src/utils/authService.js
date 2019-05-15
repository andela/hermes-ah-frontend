import jwtDecode from 'jwt-decode';

const tokenKey = 'token';

export const getToken = () => localStorage.getItem(tokenKey);

export const decodeToken = () => {
  try {
    const token = getToken();
    const { userObj } = jwtDecode(token);
    return userObj;
  } catch (ex) {
    return null;
  }
};

export const setToken = token => localStorage.setItem(tokenKey, token);

export const removeToken = () => localStorage.removeItem(tokenKey);

export default {
  setToken,
  removeToken,
  getToken,
  decodeToken,
};
