import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Followee from '../Followee/Followee';
import Following from '../Following/Following';
import FollowCard from '../FollowCard/Follow-card';
import mock from '../../../../utils/testMocks';

const { userFollowing, userFollowee } = mock;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ userFollowee, userFollowing });
const props = { userFollowee: { userFollowee: [{}] } };
const UserFolloweeComponent = (
  <Provider store={store}>
    <Followee {...props} />
  </Provider>
);

const UserFollowingComponent = (
  <Provider store={store}>
    <Following {...props} />
  </Provider>
);

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
        button=""
        btnClass=""
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
