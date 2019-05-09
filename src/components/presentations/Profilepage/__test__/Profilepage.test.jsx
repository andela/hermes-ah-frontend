import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
// import jest from 'jest';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profilepage from '../ProfilePage';
import Imagepic from '../ImagePic';

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

const bookmarkObj = {
  articles: [],
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ userProfile });

const ProfilepageComponent = (
  <Provider store={store}>
    <Profilepage
      getProfile={jest.fn()}
      userProfile={{ profile: 'me' }}
      isLoadingReducer={{ loader: true }}
      fetchArticles={jest.fn()}
      fetchBookmarks={jest.fn()}
      articlesUpdate={articleObj}
      getFollowee={jest.fn()}
      getFollowing={jest.fn()}
      userFollowee={userFolloweeObj}
      userFollowing={userFollowingObj}
      bookmarkedArticles={bookmarkObj}
    />
  </Provider>
);

describe('ProfilePage component', () => {
  it('should render profile page', () => {
    const wrapper = shallow(ProfilepageComponent);
    expect(wrapper.find('div'));
  });

  it('should render image component', () => {
    const wrapper = shallow(
      <Imagepic profilePic="" handleChange={() => 'changed'} />
    );
    expect(wrapper.find('div'));
  });

  it('should change state', () => {
    const wrapper = shallow(
      <Profilepage
        getProfile={jest.fn()}
        userProfile={{ profile: 'dummy profile' }}
        isLoadingReducer={{ loader: true }}
        articlesUpdate={articleObj}
        fetchArticles={jest.fn()}
        getFollowee={jest.fn()}
        getFollowing={jest.fn()}
        userFollowee={userFolloweeObj}
        userFollowing={userFollowingObj}
        fetchBookmarks={jest.fn()}
        bookmarkedArticles={bookmarkObj}
      />
    );

    expect(wrapper.state('currentTab')).toBe('profile-section');
    wrapper.instance().changeTab('following-section');
    expect(wrapper.state('currentTab')).toBe('following-section');
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
