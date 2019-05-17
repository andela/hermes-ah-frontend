import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('Login component', () => {
  it('should match snapshot', () => {
    const wrap = <Login />;
    expect(wrap).toMatchSnapshot();
  });
  it('should change state', () => {
    const props = {
      isLoadingReducer: { loader: true },
      user: { userProfile: {} },
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper.find('div'));
    expect(wrapper.state('data')).toEqual({
      email: '',
      password: '',
    });
  });
  it('test handle click function', () => {
    const props = {
      isLoadingReducer: { loader: true },
      user: { userProfile: {} },
    };
    const wrapper = shallow(<Login {...props} />);
    const event = { preventDefault: jest.fn() };
    expect(wrapper.instance().handelClick(event));
  });
});
