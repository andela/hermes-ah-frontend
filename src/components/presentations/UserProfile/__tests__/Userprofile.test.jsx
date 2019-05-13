import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Userprofile from '../UserProfile';

const userProfile = {
  userProfile: {
    profile: {
      first_name: 'jest',
      last_name: 'enzyme',
    },
  },
};

const articles = {
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
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ userProfile, articles });

const UserprofileComponent = (
  <Provider store={store}>
    <Userprofile
      getProfile={jest.fn()}
      userProfile={{ profile: 'me' }}
      articles={{ articleData: { author: { first_name: 'sam' } } }}
      isReviewer={false}
    />
  </Provider>
);

describe('ProfilePage component', () => {
  it('should render profile page', () => {
    const wrapper = shallow(UserprofileComponent);
    expect(wrapper.find('div'));
  });

  it('should change state', () => {
    const wrapper = shallow(
      <Userprofile
        getProfile={() => 'profile'}
        userProfile={{ userProfile: { profile: { fake: 'data' } } }}
        articles={{ articleData: [{ author: { first_name: 'sam' } }] }}
        isReviewer={false}
      />
    );

    expect(wrapper.state('checked')).toBe(false);
    wrapper.instance().toggle();
    expect(wrapper.state('checked')).toBe(true);
    wrapper.setProps({ isReviewer: true });
    expect(wrapper.state('checked')).toBe(true);
  });
});
