import actions from '../constants/stats.constant';
import http from '../utils/httpService';
import exceptionHandler from '../utils/exceptionHandler';
import UniqIds from '../utils/readingStats';
import contentLoading from './loading.action';

export const getDailyStatsSuccess = request => {
  return {
    type: actions.FETCH_DAILY_STATS_SUCCESS,
    request,
  };
};

export const getDailyStatsFailure = () => {
  return {
    type: actions.FETCH_DAILY_STATS__FAILURE,
  };
};

const getDailyStats = () => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const { data } = await http.get(`/statistics/daily`);
      const articleData = UniqIds(data.data);
      return dispatch(getDailyStatsSuccess(articleData));
    } catch (error) {
      return exceptionHandler(error);
    } finally {
      dispatch(getDailyStatsFailure());
    }
  };
};

const statisticAction = {
  getDailyStats,
};

export default statisticAction;
