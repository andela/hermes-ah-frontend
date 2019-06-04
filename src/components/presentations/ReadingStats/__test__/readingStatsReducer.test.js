import types from '../../../../constants/stats.constant';
import dailyStatReducer from '../../../../reducers/statsDaily.reducer';

describe('reviewer request reducer', () => {
  it('should return the initial state', () => {
    expect(dailyStatReducer(undefined, {})).toEqual({
      dailyStats: [],
    });
  });

  it('should handle FETCH_DAILY_STATS_SUCCESS', () => {
    expect(
      dailyStatReducer([], {
        type: types.FETCH_DAILY_STATS_SUCCESS,
        request: [{ dailyStats: 'request' }],
      })
    ).toEqual({
      dailyStats: [{ dailyStats: 'request' }],
    });
  });

  it('should handle FETCH_DAILY_STATS_FAILURE', () => {
    expect(
      dailyStatReducer([], {
        type: types.FETCH_DAILY_STATS__FAILURE,
      })
    ).toEqual({});
  });
});
