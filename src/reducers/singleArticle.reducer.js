import actionTypes from '../constants/article.constants';
import commentType from '../constants/comment.constants';

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
        error: false,
      };
    case actionTypes.FETCH_SINGLE_ARTICLE_FAILURE:
      return {
        ...state,
        error: true,
      };
    case commentType.POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments: (state.comments || []).concat([action.comment]),
      };
    case actionTypes.POST_COMMENT_FAILURE:
      return {
        ...state,
      };
    case actionTypes.RESET:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
};

export default singleArticle;
