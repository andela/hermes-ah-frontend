import React from 'react';
import { shallow } from 'enzyme';
import Notfound from '../Notfound';

describe('Notfound component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Notfound />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<Notfound />);
    expect(wrapper.find('div'));
    expect(wrapper.find('h1'));
    expect(wrapper.find('h2'));
    expect(wrapper.find('p'));
  });
});
