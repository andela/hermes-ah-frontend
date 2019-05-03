import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import HomePage from '../Homepage';
import HeroView from '../../Hero-view/Heroview-presentations';

describe('HomePage component', () => {
  it('should match snapshot', () => {
    const wrapper = create(<HomePage />);
    expect(wrapper.toJSON).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(<HeroView />));
  });
});
