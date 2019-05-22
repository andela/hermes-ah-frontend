import actionType from '../constants/comment.constants';

const initialState = {
  comment: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case actionType.POST_COMMENT_SUCCESS:
      return {
        ...state,
      };
    case actionType.POST_COMMENT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default comments;
