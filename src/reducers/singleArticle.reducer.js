import actionTypes from '../constants/article.constants';
import commentTypes from '../constants/comment.constants';

const initialState = {
  article: [],
  comments: [],
  error: false,
};

const updateArticleLike = (article, likeCount) => {
  const newArticle = article;
  newArticle.likes_count = likeCount;
  return newArticle;
};

const singleArticle = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
        comments: action.article.Comments,
      };
    case actionTypes.FETCH_SINGLE_ARTICLE_FAILURE:
      return {
        ...state,
        error: true,
      };
    case commentTypes.POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments: (state.comments || []).concat([action.comment]),
      };
    case actionTypes.POST_COMMENT_FAILURE:
      return {
        ...state,
      };
    case actionTypes.RESET_FAILING_ARTICLE:
      return {
        ...state,
        error: false,
      };
    case actionTypes.LIKE_SUCCESS:
      return {
        ...state,
        article: updateArticleLike(state.article, action.likeCount),
      };
    case actionTypes.LIKE_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default singleArticle;
