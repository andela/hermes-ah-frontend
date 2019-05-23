import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ngFaker from 'ng-faker';
import ReadingCard from '../ReadingArticleCard';
import InputComment from '../InputComment';
import ArticlePage from '../ArticlePage';
import ViewComment from '../ViewComment';

const names = ngFaker.name.firstName();

const props = {
  article: {
    Keywords: [{ keywords: 'chemistry' }, { keywords: 'chemistry' }],
    author: { image_url: 'url', first_name: names, last_name: names },
    body: '<p>html</p>',
    image_url: 'url',
  },
  comments: [{ replies: [{ replier: {} }] }],
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
  postComment: jest.fn(),
  comment: { id: 'id', replies: [{ replier: { createdAt: 'time' } }] },
  match: { params: 'id', articleId: 'articleId' },
  singleArticle: props,
  isLoadingReducer: { loader: true },
  image_url: 'image',
  articleId: 'id',
};

const ArticlePageContainer = (
  <Provider store={store}>
    <ArticlePage
      match={articleProps.match}
      getSingleArticle={articleProps.getSingleArticle}
      singleArticle={articleProps.singleArticle}
      postComment={articleProps.postComment}
      isLoadingReducer={articleProps.isLoadingReducer}
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
        postComment={articleProps.postComment}
        isLoadingReducer={articleProps.isLoadingReducer}
      />
    );
    expect(wrapper.find('div'));
  });

  const commentInputProps = {
    postComment: jest.fn(),
    article: {
      id: 'id',
      author: { image_url: 'url', first_name: names, last_name: names },
    },
  };

  const commentViewProps = {
    article: {
      id: 'id',
      author: { image_url: 'url', first_name: names, last_name: names },
    },
    comment: { id: 'id', replies: [{ replier: { createdAt: 'time' } }] },
    match: { params: 'id', articleId: 'articleId' },
  };

  it('test handle handleCommentInput function', () => {
    const wrapper = shallow(<InputComment {...commentInputProps} />);
    const event = { preventDefault: jest.fn(), target: { value: 'value' } };
    expect(wrapper.instance().handleCommentInput(event));
  });

  it('test handle sendComment function', () => {
    const wrapper = shallow(<InputComment {...commentInputProps} />);
    wrapper.setState({ commentVal: 'input' });
    const event = { preventDefault: jest.fn(), target: { id: 'id' } };
    expect(wrapper.instance().sendComment(event));
  });

  it('test handle onEnterSubmit function', () => {
    const wrapper = shallow(<InputComment {...commentInputProps} />);
    wrapper.setState({ commentVal: 'input' });
    const event = { preventDefault: jest.fn(), keyCode: 13, shiftKey: false };
    expect(wrapper.instance().onEnterSubmit(event));
  });

  it('test handle showCommentInput function', () => {
    const wrapper = shallow(<ViewComment {...commentViewProps} />);
    wrapper.setState({ input: true });
    const event = { preventDefault: jest.fn(), target: { id: 'id' } };
    expect(wrapper.instance().showCommentInput(event));
  });

  it('test handle toggleReplies function', () => {
    const wrapper = shallow(<ViewComment {...commentViewProps} />);
    wrapper.setState({ toggle: true });
    expect(wrapper.instance().toggleReplies());
  });
});
