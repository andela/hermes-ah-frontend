import React from 'react';
import { shallow, mount } from 'enzyme';
import ngFaker from 'ng-faker';
import UserProfileModal from '../UserProfileModal';
import EditProfileModal from '../EditProfileModal';

const name = ngFaker.name.firstName();
const prefix = ngFaker.name.prefix();
const word = ngFaker.lorem.phrase();

describe('ProfilePage component', () => {
  it('should render profile page', () => {
    const props = {
      modal: {
        closeModal: jest.fn(),
        openModal: jest.fn(),
        modalOpen: false,
        modalProfile: {
          profile: { first_name: name, id: 'fakeid', last_name: name },
        },
      },
    };
    const wrapper = shallow(<UserProfileModal {...props} />);
    wrapper.find('.close').simulate('click');
    wrapper.find('.close').simulate('keydown');
    expect(wrapper.find('div'));
  });
});

describe('Edit Profile component', () => {
  it('should edit profile modal with components', () => {
    const props = {
      modal: {
        closeModal: jest.fn(),
        openModal: jest.fn(),
        modalOpen: false,
        profile: { title: prefix, research_field: word, bio: word },
      },
    };

    const event = { target: { id: 'title', value: 'Prof' } };
    const wrapper = shallow(<EditProfileModal {...props} />);
    expect(wrapper.find('div'));
    expect(wrapper.state('profileDetails')).toEqual({
      title: prefix,
      research_field: word,
      bio: word,
    });
    expect(wrapper.instance().changeProfile(event));
    expect(wrapper.state('profileDetails')).toEqual({
      title: 'Prof',
      research_field: word,
      bio: word,
    });
  });

  it('should simulate edit profile modal', () => {
    const props = {
      modal: {
        closeModal: jest.fn(),
        openModal: jest.fn(),
        modalOpen: false,
        profile: { title: prefix, research_field: word, bio: word },
        updateProfile: jest.fn(),
      },
    };

    const wrapper = mount(<EditProfileModal {...props} />);
    wrapper.find('.close').simulate('click');
    wrapper.find('.close').simulate('keydown');
    wrapper.find('.edit-profile-form').simulate('submit');
    wrapper.find('.cancel-btn').simulate('click');
  });
});
