import actionTypes from '../constants/article.constants';
import commentTypes from '../constants/comment.constants';

const initialState = {
  article: [],
  comments: [],
  error: false,
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
    default:
      return state;
  }
};

export default singleArticle;
