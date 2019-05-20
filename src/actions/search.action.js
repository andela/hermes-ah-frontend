import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';

export const searchArticle = async value => {
  try {
    const { data } = await http.get(`/search?filter=${value}`);
    return data;
  } catch (ex) {
    return exceptionHandler(ex);
  }
};

export default {
  searchArticle,
};
