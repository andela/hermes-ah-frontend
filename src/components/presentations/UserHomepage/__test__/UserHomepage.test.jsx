import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UserHomepage from '../UserHomepage';
import PopularArticleCard from '../../PopularArticleCard/PopularArticleCard';
import ArticleCard from '../../ArticleCard/Article';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const props = {
  articles: {
    articleData: [
      {
        id: 2,
        author: 'fadad',
        abstract: 'sfsf',
        title: 'fsdsds',
        category: 'gfdfg',
      },
    ],
  },
  getAllArticles: jest.fn(),
};

const articleCardProps = {
  id: 2,
  author: 'fadad',
  abstract: 'sfsf',
  title: 'fsdsds',
  category: 'gfdfg',
  date: '2017-11-25T12:34:56z',
  read: 'min',
  paragraph: 'paragraph',
};

const popularArticleCardProps = {
  title: 'title',
  author: 'author',
  date: '2017-11-25T12:34:56z',
  likes: 2,
  num: '2',
};

const UserHomePageComponent = (
  <Provider store={store}>
    <UserHomepage {...props} />
  </Provider>
);

describe('userHomePage component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(UserHomePageComponent);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<UserHomepage {...props} />);
    expect(wrapper.find('Item'));
  });

  it('should render ArticleCard without crashing', () => {
    const wrapper = shallow(<ArticleCard {...articleCardProps} />);
    expect(wrapper.find('div'));
  });

  it('should render PopularArticleCard without crashing', () => {
    const wrapper = shallow(
      <PopularArticleCard {...popularArticleCardProps} />
    );
    expect(wrapper.find('div'));
  });
});
