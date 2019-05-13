import actionTypes from '../constants/reported.contants';

const initialState = {
  reportedArticle: [],
};

const reportedArticles = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REPORTED_ARTICLE_SUCCESS:
      return { ...state, reportedArticle: action.reports };
    case actionTypes.GET_REPORTED_ARTICLE_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default reportedArticles;
