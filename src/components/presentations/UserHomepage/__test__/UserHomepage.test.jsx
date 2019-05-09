import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UserHomepage from '../UserHomepage';
// import ArticleCard from '../../ArticleCard/Article';
import PopularArticleCard from '../../PopularArticleCard/PopularArticleCard';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const props = {
  articles: {
    articleData: [
      {
        key: 0,
        author: 'fadad',
        abstract: 'sfsf',
        title: 'fsdsds',
        category: 'gfdfg',
        date: 'date',
        likes: 23,
      },
    ],
  },
  getAllArticles: jest.fn(),
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
    // expect(wrapper.find(<ArticleCard key="title" date="date" />));
    expect(wrapper.find('Item'));
  });

  // it('should render articleCard without crashing', () => {
  //   const wrapper = shallow(
  //     <ArticleCard
  //       paragraph="ghjhgsd"
  //       title="ndksjfkn"
  //       author="ghksf"
  //       date="kjfjdkds"
  //       read="jcksf"
  //       category="jkdfsf"
  //       image="jdfdfsf"
  //       key="1"
  //       num={3}
  //     />
  //   );
  //   expect(wrapper.find('Header'));
  // });

  it('should render PopularArticleCard without crashing', () => {
    const wrapper = shallow(
      <PopularArticleCard
        key="fsfsf"
        title="ubkub"
        author="hkshs"
        date="jkjsd"
        likes={2}
        num="jkjsd"
      />
    );
    expect(wrapper.find('Header'));
  });
});
