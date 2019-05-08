import React from 'react';
import { shallow } from 'enzyme';
import ProfileCard from '../ProfileCard';
import ReportedCard from '../ReportedCard';
import SuggestesArticleCard from '../SuggestedArticleCard';

describe('ProfilePage component', () => {
  it('should render profile page', () => {
    const wrapper = shallow(<ProfileCard profile={{}} />);
    expect(wrapper.find('div'));
  });

  it('should render profile page', () => {
    const wrapper = shallow(
      <ReportedCard topic="topic" reason="reason" status="status" />
    );
    expect(wrapper.find('div'));
  });

  it('should render profile page', () => {
    const wrapper = shallow(
      <SuggestesArticleCard
        title="title"
        firstname="firstname"
        lastname="firstname"
        readingTime="firstname"
        body="firstname"
      />
    );
    expect(wrapper.find('div'));
  });
});
