import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  getFollowingSuccess,
  getFollowingFailure,
} from '../../../../actions/following.actions';
import types from '../../../../constants/following.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to fetch following success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_FOLLOWING_SUCCESS,
        following: { firstname: 'sam', lastname: 'peter', bio: '' },
      },
    ];
    const store = mockStore({});

    const dummyFollowing = {
      firstname: 'sam',
      lastname: 'peter',
      bio: '',
    };

    store.dispatch(getFollowingSuccess(dummyFollowing));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch following failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_FOLLOWING_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(getFollowingFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
