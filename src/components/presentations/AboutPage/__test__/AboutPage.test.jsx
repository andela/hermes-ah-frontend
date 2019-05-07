import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../AboutPage';

describe('HomePage component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper.find('div'));
    expect(wrapper.find('section'));
    expect(wrapper.find('p'));
    expect(wrapper.hasClass('title'));
  });
});
