import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profilpage from '../Profilepage';

const userProfile = {
  userProfile: {
    profile: {
      first_name: 'jest',
      last_name: 'enzyme',
    },
  },
};

const articleObj = {
  articles: [],
};

const userFollowingObj = {
  userFollowing: [],
};

const userFolloweeObj = {
  userFollowee: [],
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ userProfile });

const ProfilepageComponent = (
  <Provider store={store}>
    <Profilpage
      getProfile={() => 'profile'}
      userProfile={{ profile: 'me' }}
      fetchArticles={() => 'articles'}
      articlesUpdate={articleObj}
      getFollowee={() => 'user'}
      getFollowing={() => 'user'}
      userFollowee={userFolloweeObj}
      userFollowing={userFollowingObj}
    />
  </Provider>
);

describe('ProfilePage component', () => {
  it('should render profile page', () => {
    const wrapper = shallow(ProfilepageComponent);
    expect(wrapper.find('div'));
  });

  it('should change state', () => {
    const wrapper = shallow(
      <Profilpage
        getProfile={() => 'profile'}
        userProfile={{ profile: 'dummy profile' }}
        articlesUpdate={articleObj}
        fetchArticles={() => 'articles'}
        getFollowee={() => 'user'}
        getFollowing={() => 'user'}
        userFollowee={userFolloweeObj}
        userFollowing={userFollowingObj}
      />
    );

    expect(wrapper.state('currentTab')).toBe('following-section');
    wrapper.instance().changeTab('profile-section');
    expect(wrapper.state('currentTab')).toBe('profile-section');
    wrapper.instance().changeTab('followers-section');
    expect(wrapper.state('currentTab')).toBe('followers-section');
    wrapper.instance().changeTab('article-section');
    expect(wrapper.state('currentTab')).toBe('article-section');
    wrapper.instance().changeTab('bookmark-section');
    expect(wrapper.state('currentTab')).toBe('bookmark-section');
    wrapper.setProps({ userProfile });
    expect(wrapper.state('firstname')).toBe('jest');
    expect(wrapper.state('lastname')).toBe('enzyme');
  });
});
