import actionTypes from '../constants/stats.constant';

const initialState = {
  dailyStats: [],
};
const dailyStats = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DAILY_STATS_SUCCESS:
      return { ...state, dailyStats: action.request };
    case actionTypes.FETCH_DAILY_STATS__FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default dailyStats;
