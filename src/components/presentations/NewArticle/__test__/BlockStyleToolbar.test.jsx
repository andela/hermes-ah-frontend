import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import HeaderDropdown from '../BlockStyles/BlockStyleToolbar';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const ArticleHeader = (
  <Provider store={store}>
    <HeaderDropdown editorState="article" onToggle={jest.fn()} />
  </Provider>
);

describe('NewArticle button component', () => {
  it('should match snapshot', () => {
    const wrap = ArticleHeader;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(ArticleHeader);
    expect(wrapper.find('span'));
  });
});
