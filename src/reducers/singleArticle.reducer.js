import actionType from '../constants/article.constants';
import commentType from '../constants/comment.constants';

const initialState = {
  article: [],
  comments: [],
};

const singleArticle = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
        comments: action.article.Comments,
      };
    case actionType.FETCH_SINGLE_ARTICLE_FAILURE:
      return {
        ...state,
      };
    case commentType.POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments: (state.comments || []).concat([action.comment]),
      };
    case actionType.POST_COMMENT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default singleArticle;
