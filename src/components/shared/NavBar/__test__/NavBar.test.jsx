import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';
import NavContainer from '../NavBarDropdown';

const userProfile = {
  userProfile: {
    profile: {
      first_name: 'jest',
      last_name: 'enzyme',
      image_url: 'url',
    },
  },
};

const initUserProfile = {
  userProfile: {
    profile: {
      first_name: 'jest',
      last_name: 'enzyme',
      image_url: 'nourl',
    },
  },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ userProfile });

describe('NavBar component', () => {
  it('should match snapshot', () => {
    const wrapper = create(
      <Router>
        <Provider store={store}>
          <NavBar user={initUserProfile} />
        </Provider>
      </Router>
    );
    expect(wrapper.toJSON).toMatchSnapshot();
  });

  it('should render tags', () => {
    const wrapper = shallow(
      <Router>
        <NavBar user={userProfile} />
      </Router>
    );
    expect(wrapper.find('menu'));
    expect(wrapper.find('img'));
    expect(wrapper.find('menu.item'));
  });

  it('should change state', () => {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyT2JqIjp7ImlkIjoiNTdjNTE1YTEtODkwZC00MTJmLThjYTEtMGE1Mzk1MTIzZGNhIiwiZW1haWwiOiJhbWVhY2hpY2h1a3NAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaXNSZXZpZXdlciI6dHJ1ZSwiaXNBY3RpdmF0ZWQiOnRydWV9LCJpYXQiOjE1NTc3Njg3NjcsImV4cCI6MTU1ODAyNzk2N30.msqGVSZbPrBu8ky7Pa-KauhDnMLGRHG4eas9wlIEEA0'
    );

    const props = {
      user: { userProfile: {} },
      getProfile: jest.fn(),
      getSuggestions: jest.fn(),
    };
    const wrapper = shallow(<NavContainer {...props} />);
    wrapper.instance().toggleDropdown();
    expect(wrapper.state('openDropdown')).toBe(true);
  });
});
