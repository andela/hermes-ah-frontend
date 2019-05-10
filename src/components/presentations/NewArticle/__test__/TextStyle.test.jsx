import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import TextStyle from '../BlockStyles/TextStyle';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const NewArticleComponent = (
  <Provider store={store}>
    <TextStyle createNewArticle="article" />
  </Provider>
);

describe('NewArticle button component', () => {
  it('should match snapshot', () => {
    const wrap = NewArticleComponent;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(NewArticleComponent);
    expect(wrapper.find('label'));
    expect(wrapper.find('style'));
  });
});
