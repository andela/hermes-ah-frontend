import http from '../utils/httpService';
import exceptionHandler from '../utils/exceptionHandler';

const url = '/myArticles';

const fetchArticles = () => {
  return async dispatch => {
    try {
      dispatch({ type: 'GET_ARTICLES' });
      const articles = await http.get(url);
      dispatch({
        type: 'ARTICLES_RETURNED',
        payload: articles.data.articles,
      });
    } catch (ex) {
      exceptionHandler(ex);
    }
  };
};

export default fetchArticles;
