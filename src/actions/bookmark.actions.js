import { toast } from 'react-toastify';
import http from '../utils/httpService';
import exceptionHandler from '../utils/exceptionHandler';

const bookmark = articleId => {
  return async dispatch => {
    try {
      dispatch({ type: 'BOOKMARK' });
      const articles = await http.post(`/bookmarks/${articleId}`);

      if (articles.data.data.bookmarked) {
        toast.success(articles.data.message);
        dispatch({
          type: 'BOOKMARKED',
          payload: articles.data,
        });
      } else {
        toast.error(articles.data.message);
        dispatch({
          type: 'UNBOOKMARKED',
          payload: articles.data,
        });
      }
    } catch (err) {
      exceptionHandler(err);
    }
  };
};

export default bookmark;
