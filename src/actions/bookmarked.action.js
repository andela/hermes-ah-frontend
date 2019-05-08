import http from '../utils/httpService';
import exceptionHandler from '../utils/exceptionHandler';

const url = '/bookmarks';

const fetchBookmarks = () => {
  return async dispatch => {
    try {
      dispatch({ type: 'GET_BOOKMARKS' });
      const articles = await http.get(url);
      dispatch({
        type: 'BOOKMARKS_RETURNED',
        payload: articles.data.data,
      });
    } catch (err) {
      exceptionHandler(err);
    }
  };
};

export default fetchBookmarks;
