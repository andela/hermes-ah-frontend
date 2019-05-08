const initialState = {
  fetching: false,
  fetched: false,
  articles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOOKMARKS': {
      return { ...state, fetching: true };
    }
    case 'BOOKMARKS_RETURNED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        articles: action.payload,
      };
    }
    default:
      return state;
  }
};
