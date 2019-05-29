import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ngFaker from 'ng-faker';
import ReadingCard from '../ReadingArticleCard';
import ArticlePage from '../ArticlePage';
import InputComment from '../InputComment';
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
  updateComment: jest.fn(),
  reset: jest.fn(),
  comment: { id: 'id', replies: [{ replier: { createdAt: 'time' } }] },
  match: { params: 'id', articleId: 'articleId' },
  singleArticle: props,
  isLoadingReducer: { loader: true },
  image_url: 'image',
  articleId: 'id',
  user: { userProfile: {} },
};

const inputCommentProps = {
  imageUrl: 'string',
  closeVal: 'string',
  articleId: 'string',
  btnValue: 'string',
  submitForm: jest.fn(),
  commentVal: 'string',
  handleChange: jest.fn(),
  enterKeyFormSubmit: jest.fn(),
  handleClose: jest.fn(),
};

const ArticlePageContainer = (
  <Provider store={store}>
    <ArticlePage
      match={articleProps.match}
      getSingleArticle={articleProps.getSingleArticle}
      singleArticle={articleProps.singleArticle}
      postComment={articleProps.postComment}
      isLoadingReducer={articleProps.isLoadingReducer}
      user={articleProps.user}
      reset={articleProps.reset}
      updateComment={articleProps.updateComment}
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
        user={articleProps.user}
        reset={articleProps.reset}
        updateComment={articleProps.updateComment}
      />
    );
    expect(wrapper.find('div'));
  });

  it('InputComment component', () => {
    const wrapper = shallow(<InputComment {...inputCommentProps} />);
    expect(wrapper.find('div'));
  });

  it('should handle sortComment function', async () => {
    const wrapper = shallow(
      <ArticlePage
        match={articleProps.match}
        getSingleArticle={articleProps.getSingleArticle}
        singleArticle={articleProps.singleArticle}
        postComment={articleProps.postComment}
        isLoadingReducer={articleProps.isLoadingReducer}
        user={articleProps.user}
        reset={articleProps.reset}
        updateComment={articleProps.updateComment}
      />
    );
    const comment = [
      { id: 'id', replies: [{ replier: { createdAt: 'time' } }] },
    ];
    expect(await wrapper.instance().sortComment(comment));
  });

  const commentViewProps = {
    article: {
      id: 'id',
      author: { image_url: 'url', first_name: names, last_name: names },
    },
    comment: {
      id: 'id',
      replies: [{ replier: { createdAt: 'time' } }],
      commentOwner: { image_url: 'image' },
    },
    match: { params: 'id', articleId: 'articleId' },
    updateComment: jest.fn(),
  };

  it('shoud handle handleCommentInput function', () => {
    const wrapper = shallow(<ArticlePage {...articleProps} />);
    const event = { preventDefault: jest.fn(), target: { value: 'value' } };
    expect(wrapper.instance().handleCommentInput(event));
  });

  it('shoud handle sendComment function', () => {
    const wrapper = shallow(<ArticlePage {...articleProps} />);
    wrapper.setState({ commentVal: 'input' });
    const event = { preventDefault: jest.fn(), target: { id: 'id' } };
    expect(wrapper.instance().sendComment(event));
  });

  it('should handle onEnterSubmit function', () => {
    const wrapper = shallow(<ArticlePage {...articleProps} />);
    wrapper.setState({ commentVal: 'input' });
    const event = { preventDefault: jest.fn(), keyCode: 13, shiftKey: false };
    expect(wrapper.instance().onEnterSubmit(event));
  });

  it('should handle showCommentInput function', () => {
    const wrapper = shallow(<ViewComment {...commentViewProps} />);
    wrapper.setState({ input: true });
    const event = { preventDefault: jest.fn(), target: { id: 'id' } };
    expect(wrapper.instance().showCommentInput(event));
  });

  it('should handle toggleReplies function', () => {
    const wrapper = shallow(<ViewComment {...commentViewProps} />);
    wrapper.setState({ toggle: true });
    expect(wrapper.instance().toggleReplies());
  });

  it('should handle toggleCommentMenu function', () => {
    const wrapper = shallow(<ViewComment {...commentViewProps} />);
    wrapper.setState({ menu: true });
    expect(wrapper.instance().toggleCommentMenu());
  });

  it('should handle showEditComment function', () => {
    const wrapper = shallow(<ViewComment {...commentViewProps} />);
    wrapper.setState({ showEdit: true });
    expect(wrapper.instance().showEditComment());
  });

  it('should handle handleReplyInput function', () => {
    const wrapper = shallow(<ViewComment {...commentViewProps} />);
    wrapper.setState({ replyVal: 'value' });
    const event = { preventDefault: jest.fn(), target: { value: 'value' } };
    expect(wrapper.instance().handleReplyInput(event));
  });

  it('should handle editComment function', () => {
    const wrapper = shallow(<ViewComment {...commentViewProps} />);
    wrapper.setState({ replyVal: '' });
    const event = { preventDefault: jest.fn(), target: { id: 'id' } };
    expect(wrapper.instance().editComment(event));
  });
});
