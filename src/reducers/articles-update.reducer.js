import actionTypes from '../constants/my-articles.constants';

const initialState = {
  fetching: false,
  fetched: false,
  articles: [],
  deletedArticle: '',
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES': {
      return { ...state, fetching: true };
    }
    case 'ARTICLES_RETURNED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        articles: action.payload,
      };
    }
    case actionTypes.DELETE_ARTICLES_SUCCESS: {
      console.log(state.articles, '>>>>>>>>>>>');
      console.log(action.deletedArticle, '<<<<<<<<<<<<<<');
      // const newFollowing = filter(
      //   state.userFollowing,
      //   action.unFollowedUser.user.id
      // );
      return {
        ...state,
        deletedArticle: action.deletedArticle,
      };
    }
    case actionTypes.DELETE_ARTICLES_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
