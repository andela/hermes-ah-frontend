import React from 'react';
import { shallow } from 'enzyme';
import Headercard from '../Headercard';

describe('ProfilePage component', () => {
  const props = {
    icon: 'icon',
    value: 'value',
  };
  it('should render profile page', () => {
    const wrapper = shallow(<Headercard {...props} />);
    expect(wrapper.find('div'));
  });
});
