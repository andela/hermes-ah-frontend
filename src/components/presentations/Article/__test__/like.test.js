import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import ngFaker from 'ng-faker';
import {
  likeArticle,
  likeSuccess,
  likeFailure,
} from '../../../../actions/like.actions';
import types from '../../../../constants/article.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const id = 'fb3def47-153c-40bd-8161-a1c787e083d6';
const names = ngFaker.name.firstName();

const article = {
  Keywords: [{ keywords: 'chemistry' }, { keywords: 'chemistry' }],
  author: { image_url: 'url', first_name: names, last_name: names },
  body: '<p>html</p>',
  image_url: 'url',
};
describe('single article actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to fetch profile success', async () => {
    const expectedAction = [
      {
        type: types.LIKE_SUCCESS,
        article,
      },
    ];
    const store = mockStore({});

    store.dispatch(likeSuccess(article));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch profile success', async () => {
    const expectedAction = [
      {
        type: types.LIKE_FAILURE,
        article,
      },
    ];
    const store = mockStore({});

    store.dispatch(likeFailure(article));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for get profile', async () => {
    fetchMock.mock(
      `/api/v1/likes/${id}`,
      {
        status: 200,
      },
      {
        method: 'POST',
        headers: {
          Authorization: 'faketoken',
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch(`/api/v1/likes/${id}`, {
      method: 'POST',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
    });

    const expectedAction = [];

    const store = mockStore({});

    store.dispatch(likeArticle(article));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
