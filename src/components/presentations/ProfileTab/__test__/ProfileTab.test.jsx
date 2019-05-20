import React from 'react';
import { shallow } from 'enzyme';
import ProfileTab from '../ProfileTab';
import ProfileTabButton from '../ProfileTabButton';

describe('ProfileTab and ProfileButton component', () => {
  it('should render profile tab component', () => {
    const props = {
      changeTab: jest.fn(),
      currentTab: 'profile-tab',
      totalArticle: '',
      totalFollowee: '',
      totalFollowing: '',
      totalBookmarkArticle: '10',
    };
    const wrapper = shallow(<ProfileTab {...props} />);
    expect(wrapper.find('div'));
  });

  it('should render profile tab button component', () => {
    const btnProps = {
      value: 'profile',
      onClick: jest.fn(),
      className: 'profile-tab',
      number: '10',
    };
    const wrapper = shallow(<ProfileTabButton {...btnProps} />);
    expect(wrapper.find('div'));
  });
});
