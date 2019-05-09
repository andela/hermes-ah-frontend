import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  getAllArticlesSuccess,
  getAllArticlesError,
} from '../../../../actions/article.actions';
import types from '../../../../constants/article.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('article actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to fetch article success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_ARTICLES_SUCCESS,
        articles: { title: 'title', abstract: 'abstract' },
      },
    ];
    const store = mockStore({});

    const dummyArticle = {
      title: 'title',
      abstract: 'abstract',
    };

    store.dispatch(getAllArticlesSuccess(dummyArticle));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for article failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_ARTICLES_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(getAllArticlesError());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
