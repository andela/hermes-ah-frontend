import actionType from '../constants/article.constants';

const initialState = {
  isLoading: false,
  articleData: [],
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CONTENT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articleData: action.articles,
        isLoading: false,
      };
    case actionType.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default articles;
