import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Userprofile from '../UserProfile';
import mock from '../../../../utils/testMocks';

const { userProfileReducer, articleReducer } = mock;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  userProfileReducer,
  articles: articleReducer.articles,
});

const UserprofileComponent = (
  <Provider store={store}>
    <Userprofile
      getProfile={jest.fn()}
      articles={articleReducer.articles}
      isReviewer={false}
      getReportedArticle={jest.fn()}
      reportedArticles={{ reportedArticle: [] }}
      updateProfile={jest.fn()}
      userProfile={userProfileReducer}
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
        getProfile={jest.fn()}
        articles={articleReducer.articles}
        isReviewer={false}
        getReportedArticle={jest.fn()}
        reportedArticles={{ reportedArticle: [] }}
        userProfile={userProfileReducer}
        updateProfile={jest.fn()}
      />
    );

    expect(wrapper.state('checked')).toBe(false);
    wrapper.instance().toggle();
    expect(wrapper.state('checked')).toBe(true);
    wrapper.setProps({ isReviewer: true });
    expect(wrapper.state('checked')).toBe(true);
  });
});
