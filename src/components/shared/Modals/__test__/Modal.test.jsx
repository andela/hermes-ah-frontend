import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../Modal';

describe('Edit Profile component', () => {
  it('should edit profile modal with components', () => {
    const props = {
      title: 'Edit Modal',
      openModal: jest.fn(),
      modalOpen: false,
    };

    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('div'));
  });

  it('should simulate edit profile modal', () => {
    const props = {
      title: 'Edit Modal',
      openModal: jest.fn(),
      modalOpen: false,
    };

    const wrapper = mount(<Modal {...props} />);
    wrapper.find('.close').simulate('click');
    wrapper.find('.close').simulate('keydown');
  });
});
