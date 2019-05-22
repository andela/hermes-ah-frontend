import React from 'react';
import { shallow } from 'enzyme';
import UserProfileModal from '../UserProfileModal';

const props = {
  modal: {
    closeModal: jest.fn(),
    openModal: jest.fn(),
    modalOpen: false,
    modalProfile: {
      profile: { first_name: 'Rotimi', id: 'fakeid', last_name: 'Rotimi' },
    },
  },
};

describe('ProfilePage component', () => {
  it('should render profile page', () => {
    const wrapper = shallow(<UserProfileModal {...props} />);
    wrapper.find('.close').simulate('click');
    wrapper.find('.close').simulate('keydown');
    expect(wrapper.find('div'));
  });
});
