import actionType from '../constants/article.constants';

const initialState = {
  article: [],
};

const singleArticle = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
      };
    default:
      return state;
  }
};

export default singleArticle;
