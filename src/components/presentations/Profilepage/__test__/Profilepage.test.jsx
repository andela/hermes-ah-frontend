import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profilepage from '../ProfilePage';
import Imagepic from '../ImagePic';
import mock from '../../../../utils/testMocks';

const {
  userProfile,
  articleObj,
  userFolloweeObj,
  userFollowingObj,
  bookmarkObj,
} = mock;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ userProfile });
const props = {
  getProfile: jest.fn(),
  user: { userProfile: {} },
  isLoadingReducer: { loader: true },
  articlesUpdate: articleObj,
  fetchArticles: jest.fn(),
  getDailyStats: jest.fn(),
  getFollowee: jest.fn(),
  getFollowing: jest.fn(),
  userFollowee: userFolloweeObj,
  userFollowing: userFollowingObj,
  fetchBookmarks: jest.fn(),
  bookmarkedArticles: bookmarkObj,
  updateProfile: jest.fn(),
  getSuggestions: jest.fn(),
  dailyStats: jest.fn(),
};

const ProfilepageComponent = (
  <Provider store={store}>
    <Profilepage {...props} />
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
    const wrapper = shallow(<Profilepage {...props} />);

    expect(wrapper.state('currentTab')).toBe('profile-section');
    wrapper.instance().changeTab('following-section');
    expect(wrapper.state('currentTab')).toBe('following-section');
    wrapper.instance().changeTab('followers-section');
    expect(wrapper.state('currentTab')).toBe('followers-section');
    wrapper.instance().changeTab('article-section');
    expect(wrapper.state('currentTab')).toBe('article-section');
    wrapper.instance().changeTab('bookmark-section');
    expect(wrapper.state('currentTab')).toBe('bookmark-section');
    wrapper.instance().openModal('7142e4ff-366d-46cc-9384-40eadb3b2626');
    wrapper.instance().closeModal();
    wrapper.instance().showConfirmationModal('tiny', 'id');
    wrapper.instance().closeConfirmationModal();
  });
});
