import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../Homepage';
import HeroView from '../../HeroView/HeroviewPresentations';

describe('HomePage component', () => {
  it('should match snapshot', () => {
    const wrapper = <HomePage />;
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(<HeroView />));
  });
});
