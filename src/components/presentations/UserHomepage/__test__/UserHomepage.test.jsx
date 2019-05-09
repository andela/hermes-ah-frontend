import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UserHomePage from '../UserHomepage';
import ArticleCard from '../../ArticleCard/Article';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const UserHomePageComponent = (
  <Provider store={store}>
    <UserHomePage
      getAllArticles={() => 'articles'}
      articles={{ articleData: [{}] }}
      isLoadingReducer={{ loader: false }}
    />
  </Provider>
);

describe('userHomePage component', () => {
  let props;
  beforeEach(() => {
    props = {
      articles: {
        articleData: [{ author: { first_name: 'bkunmi' } }],
        title: 'bukunmi',
        paragraph: jest.fn(() => 'buknmi'.substring(0, 2)),
      },
    };
  });
  it('should match snapshot', () => {
    const wrapper = shallow(UserHomePageComponent);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(
      <UserHomePage {...props} getAllArticles={() => 'articles'} />
    );
    expect(wrapper.find(<ArticleCard title="name" />));
  });
});
