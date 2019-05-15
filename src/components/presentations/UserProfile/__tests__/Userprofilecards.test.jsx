import React from 'react';
import { shallow } from 'enzyme';
import ProfileCard from '../ProfileCard';
import ReportedCard from '../ReportedCard';
import SuggestesArticleCard from '../SuggestedArticleCard';

describe('ProfilePage component', () => {
  it('should render profile page', () => {
    const props = {
      profile: {},
      updateProfile: jest.fn(),
    };
    const wrapper = shallow(<ProfileCard {...props} />);
    expect(wrapper.find('div'));
  });

  it('should render profile page', () => {
    const props = {
      topic: 'topic',
      reason: 'reason',
      status: 'status',
    };
    const wrapper = shallow(<ReportedCard {...props} />);
    expect(wrapper.find('div'));
  });

  it('should render profile page', () => {
    const props = {
      title: 'title',
      firstname: 'firstname',
      lastname: 'firstname',
      readingTime: 1,
      body: 'firstname',
    };
    const wrapper = shallow(<SuggestesArticleCard {...props} />);
    expect(wrapper.find('div'));
  });
});
