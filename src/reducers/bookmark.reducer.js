const initialState = {
  bookmarking: true,
  bookmarked: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKMARK': {
      return { ...state, bookmarking: true };
    }
    case 'BOOKMARKED': {
      return { ...state, bookmarked: true };
    }
    case 'UNBOOKMARKED': {
      return { ...state, bookmarked: false };
    }
    default:
      return state;
  }
};
