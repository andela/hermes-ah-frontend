import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

const user = { name: null };

describe('NavBar component', () => {
  it('should match snapshot', () => {
    const wrapper = create(
      <Router>
        <NavBar user={user} />
      </Router>
    );
    expect(wrapper.toJSON).toMatchSnapshot();
  });

  it('should render tags', () => {
    const wrapper = shallow(
      <Router>
        <NavBar user={user} />
      </Router>
    );
    expect(wrapper.find('menu'));
    expect(wrapper.find('img'));
    expect(wrapper.find('menu.item'));
  });
});
