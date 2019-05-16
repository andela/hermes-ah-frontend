import actionType from '../constants/article.constants';

const initialState = {
  articleData: [],
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articleData: action.articles,
      };
    case actionType.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
      };
<<<<<<< HEAD
    case actionType.POST_ARTICLES_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case actionType.POST_ARTICLES_FAILURE:
      return {
        ...state,
=======
    case actionType.LIKE_SUCCESS:
      return {
        ...state,
        articleData: action.currentArticle,
      };
    case actionType.LIKE_FAILURE:
      return {
        ...state,
        articleData: action.article,
>>>>>>> 1aa3a40... 164797984-feature(like): implement like feature
      };
    default:
      return state;
  }
};

export default articles;
