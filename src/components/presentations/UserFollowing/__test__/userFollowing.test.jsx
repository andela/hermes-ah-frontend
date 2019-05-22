import React from 'react';
import { shallow } from 'enzyme';
import Followee from '../Followee/Followee';
import Following from '../Following/Following';
import FollowCard from '../FollowCard/Follow-card';
import mock from '../../../../utils/testMocks';

const { propsFollowing, propsFollowee } = mock;

const UserFolloweeComponent = <Followee {...propsFollowee} />;

const UserFollowingComponent = <Following {...propsFollowing} />;

describe('<Followee />', () => {
  it('should render user followee page', () => {
    const wrapper = shallow(UserFolloweeComponent);
    expect(wrapper.find('div'));
  });
});

describe('<Following />', () => {
  it('should render user following page', () => {
    const wrapper = shallow(UserFollowingComponent);
    expect(wrapper.find('div'));
  });
});

describe('<FollowCard />', () => {
  it('should render user follow card', () => {
    const wrapper = shallow(
      <FollowCard
        imageUrl=""
        initials=""
        name=""
        bio=""
        Id=""
        buttonEvent={jest.fn()}
        button=""
        btnClass=""
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
