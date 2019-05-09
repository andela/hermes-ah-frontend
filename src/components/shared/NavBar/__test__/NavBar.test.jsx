import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';
import NavContainer from '../NavBarDropdown';

const user = { name: null };

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
          <NavBar user={user} />
        </Provider>
      </Router>
    );
    expect(wrapper.toJSON).toMatchSnapshot();
  });

  it('should render tags', () => {
    const wrapper = shallow(
      <Router>
        <NavBar user={user} />
      </Router>
    );
    expect(wrapper.find('menu'));
    expect(wrapper.find('img'));
    expect(wrapper.find('menu.item'));
  });

  it('should change state', () => {
    const wrapper = shallow(
      <NavContainer
        userProfile={initUserProfile}
        getProfile={() => 'profile'}
      />
    );
    wrapper.setProps({ userProfile });
    expect(wrapper.state('userPic')).toBe('url');
    wrapper.instance().toggleDropdown();
    expect(wrapper.state('openDropdown')).toBe(true);
  });
});
