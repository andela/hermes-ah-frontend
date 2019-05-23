import React from 'react';
import { shallow, mount } from 'enzyme';
import ProfileCard from '../ProfileCard';
import ReportedCard from '../ReportedCard';
import SuggestesArticleCard from '../SuggestedArticleCard';
import SuggestedResearchers from '../SuggestedResearchers';

describe('ProfilePage component', () => {
  it('should render profile page', () => {
    const props = {
      updateProfile: jest.fn(),
    };
    const wrapper = shallow(<ProfileCard {...props} />);
    expect(wrapper.find('div'));
  });

  it('should change state on store detail', () => {
    const props = {
      updateProfile: jest.fn(),
    };
    const event = { preventDefault: jest.fn() };
    const data = { research_field: 'chemistry' };
    const inputEvent = { target: { id: 'title', value: 'Prof' } };
    const wrapper = shallow(<ProfileCard {...props} />);
    expect(wrapper.state('modalOpen')).toEqual(false);
    expect(wrapper.instance().openModal());
    expect(wrapper.state('modalOpen')).toEqual(true);
    expect(wrapper.instance().closeModal());
    expect(wrapper.state('modalOpen')).toEqual(false);
    expect(wrapper.instance().updateUserProfile(event, data));
    expect(wrapper.state('profileDetails')).toEqual({
      title: '',
      research_field: '',
      bio: '',
    });
    expect(wrapper.instance().changeProfile(inputEvent));
  });

  it('should render profile page', () => {
    const props = {
      updateProfile: jest.fn(),
    };
    const wrapper = mount(<ProfileCard {...props} />);
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
