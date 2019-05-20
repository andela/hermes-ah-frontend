import React from 'react';
import { shallow, mount } from 'enzyme';
import ProfileCard from '../ProfileCard';
import ReportedCard from '../ReportedCard';
import SuggestesArticleCard from '../SuggestedArticleCard';
import SuggestedResearchers from '../SuggestedResearchers';

describe('ProfilePage component', () => {
  it('should render profile page', () => {
    const props = {
      profile: {},
      updateProfile: jest.fn(),
    };
    const wrapper = shallow(<ProfileCard {...props} />);
    expect(wrapper.find('div'));
  });

  it('should change state on store detail', () => {
    const props = {
      profile: {},
      updateProfile: jest.fn(),
    };

    const event = { target: { id: 'title', textContent: 'prof' } };
    const event2 = { target: { id: 'title', textContent: 'profX' } };
    const wrapper = shallow(<ProfileCard {...props} />);
    expect(wrapper.state('profile')).toEqual({});
    expect(wrapper.instance().storeDetail(event));
    expect(wrapper.state('profile')).toEqual({ title: 'prof' });
    expect(wrapper.instance().updateUserProfile(event2));
  });

  it('should change state on store detail', () => {
    const props = {
      profile: {},
      updateProfile: jest.fn(),
    };

    const wrapper = mount(<ProfileCard {...props} />);
    wrapper.find('#title').simulate('focus');
    wrapper.find('#title').simulate('blur');
    wrapper.find('#research_field').simulate('focus');
    wrapper.find('#research_field').simulate('blur');
    wrapper.find('#phone_number').simulate('focus');
    wrapper.find('#phone_number').simulate('blur');
    wrapper.find('#bio').simulate('focus');
    wrapper.find('#bio').simulate('blur');
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

  it('should render suggested researchers ', () => {
    const props = {
      suggestedResearchers: [
        {
          profile: {
            id: 'title',
            first_name: 'firstname',
            last_name: 'firstname',
            bio: 'firstname',
            image_url: 1,
          },
        },
      ],
    };
    const wrapper = shallow(<SuggestedResearchers {...props} />);
    expect(wrapper.find('div'));
  });
});
