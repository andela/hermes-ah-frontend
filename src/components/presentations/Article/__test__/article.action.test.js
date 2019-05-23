import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { getSingleArticle } from '../../../../actions/singleArticle.actions';
import types from '../../../../constants/article.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('single article actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for getting single article', async () => {
    await fetchMock.mock(
      '/api/v1/article/1',
      {
        status: 200,
      },
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch('/api/v1/article/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const expectedAction = [
      {
        type: 'CONTENT_LOADING',
      },
      {
        type: types.FETCH_SINGLE_ARTICLE_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(getSingleArticle());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
