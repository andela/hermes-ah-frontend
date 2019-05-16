import { toast } from 'react-toastify';
import exceptionHandler from '../utils/exceptionHandler';
import actionTypes from '../constants/article.constants';
import http from '../utils/httpService';

const url = '/likes';

export const likeSuccess = currentArticle => ({
  type: actionTypes.LIKE_SUCCESS,
  currentArticle,
});

export const likeFailure = article => ({
  type: actionTypes.LIKE_FAILURE,
  article,
});

export const likeArticle = (articleId, article) => {
  return async dispatch => {
    try {
      const currentArticle = article.filter(x => x.id === articleId);
      const newArticles = article.filter(x => x.id !== articleId);
      let likes = currentArticle[0].likes_count;
      likes += 1;
      currentArticle[0].likes_count = likes;
      const articles = [...newArticles, currentArticle[0]];
      dispatch(likeSuccess(articles));
      const { data: result } = await http.post(`${url}/${articleId}`);
      const { data } = result;
      if (!data.like) {
        dispatch(likeFailure(article));
        toast.error('You have already like this article');
      }
    } catch (ex) {
      exceptionHandler(ex);
    }
  };
};

export default {
  likeArticle,
};
