import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ngFaker from 'ng-faker';
import ReadingCard from '../reading-article-card';
import ArticlePage from '../ArticlePage';

const names = ngFaker.name.firstName();

const props = {
  article: {
    Keywords: [{ keywords: 'chemistry' }, { keywords: 'chemistry' }],
    author: { image_url: 'url', first_name: names, last_name: names },
    body: '<p>html</p>',
    image_url: 'url',
  },
};
describe('Article', () => {
  it('reading card', () => {
    const wrapper = shallow(<ReadingCard {...props} />);
    expect(wrapper.find('div'));
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const articleProps = {
  getSingleArticle: jest.fn(),
  match: { params: 'id' },
  singleArticle: props,
};

const ArticlePageContainer = (
  <Provider store={store}>
    <ArticlePage
      match={articleProps.match}
      getSingleArticle={articleProps.getSingleArticle}
      singleArticle={articleProps.singleArticle}
    />
  </Provider>
);

describe('Article Page', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(ArticlePageContainer);
    expect(wrapper).toMatchSnapshot();
  });

  it('reading card', () => {
    const wrapper = shallow(
      <ArticlePage
        match={articleProps.match}
        getSingleArticle={articleProps.getSingleArticle}
        singleArticle={articleProps.singleArticle}
      />
    );
    expect(wrapper.find('div'));
  });
});
