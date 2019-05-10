import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import HeaderDropdown from '../BlockStyles/HeaderStyleDropdown';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const DropdownHeader = (
  <Provider store={store}>
    <HeaderDropdown active="" onToggle={jest.fn()} headerOptions="" />
  </Provider>
);

describe('NewArticle button component', () => {
  it('should match snapshot', () => {
    const wrap = DropdownHeader;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(DropdownHeader);
    expect(wrapper.find('select'));
    expect(wrapper.find('option'));
  });
});
