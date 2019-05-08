import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

const user = { name: null };

const userProfile = {
  userProfile: {
    profile: {
      first_name: 'jest',
      last_name: 'enzyme',
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
});
