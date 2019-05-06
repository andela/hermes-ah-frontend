import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions, {
  getProfileFailure,
  getProfileSuccess,
} from '../../../../actions/profile.actions';
import types from '../../../../constants/profile.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to fetch profile success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_PROFILE_SUCCESS,
        profile: { firstname: 'sam', lastname: 'peter' },
      },
    ];
    const store = mockStore({});

    const dummyProfile = {
      firstname: 'sam',
      lastname: 'peter',
    };

    store.dispatch(getProfileSuccess(dummyProfile));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch profile failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_PROFILE_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(getProfileFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for get profile', async () => {
    fetchMock.mock(
      '/api/v1/profile/12345',
      {
        status: 200,
      },
      {
        method: 'GET',
        headers: {
          Authorization: 'faketoken',
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch('/api/v1/profile/12345', {
      method: 'GET',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
    });

    // This will be empty expected action util we have a loader
    const expectedAction = [];

    const store = mockStore({});

    store.dispatch(actions.getProfile());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
