import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import HomePage from '../Homepage';
import HeroView from '../../HeroView/HeroviewPresentations';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const props = {
  getAllArticles: jest.fn(),
  articles: { articleData: [{}] },
  isLoadingReducer: { loader: false },
  confirmAccount: jest.fn(),
};

const HomePageComponent = (
  <Provider store={store}>
    <HomePage {...props} />
  </Provider>
);

describe('HomePage component', () => {
  it('should match snapshot', () => {
    const wrap = HomePageComponent;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(HomePageComponent);
    expect(wrapper.find(<HeroView />));
  });
});
