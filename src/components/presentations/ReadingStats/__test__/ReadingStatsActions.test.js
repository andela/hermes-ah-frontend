import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import statisticAction, {
  getDailyStatsSuccess,
  getDailyStatsFailure,
} from '../../../../actions/statsDaily.actions';
import types from '../../../../constants/stats.constant';

const { getDailyStats } = statisticAction;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('get daily reading stats actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for get reading stats success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_DAILY_STATS_SUCCESS,
        request: { title: 'title' },
      },
    ];
    const store = mockStore({});

    const request = {
      title: 'title',
    };

    await store.dispatch(getDailyStatsSuccess(request));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for get reading stats failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_DAILY_STATS__FAILURE,
      },
    ];
    const store = mockStore({});

    await store.dispatch(getDailyStatsFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for getting all reading stats request ', async () => {
    await fetchMock.mock(
      '/statistics/daily',
      {
        status: 200,
      },
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'faketoken',
        },
      }
    );

    await fetch('/statistics/daily', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'faketoken',
      },
    });
    const store = mockStore({});

    await store.dispatch(getDailyStats());
  });
});
