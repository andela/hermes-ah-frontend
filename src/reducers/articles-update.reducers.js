const initialState = {
  fetching: false,
  fetched: false,
  articles: [],
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
    case 'GET_ARTICLES_ERROR': {
      return { ...state, fetching: false, error: action.payload };
    }
    default:
      return state;
  }
};
