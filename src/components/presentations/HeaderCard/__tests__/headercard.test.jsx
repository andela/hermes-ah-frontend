import React from 'react';
import { shallow } from 'enzyme';
import Headercard from '../Headercard';

describe('ProfilePage component', () => {
  it('should render profile page', () => {
    const wrapper = shallow(<Headercard icon="icon" value="value" />);
    expect(wrapper.find('div'));
  });
});
