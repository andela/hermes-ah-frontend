import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../Signup';

describe('Login component', () => {
  it('should match snapshot', () => {
    const wrap = <Signup />;
    expect(wrap).toMatchSnapshot();
  });

  it('always renders a div', () => {
    const props = {
      isLoadingReducer: { loader: true },
      user: { userProfile: {} },
    };
    const wrapper = shallow(<Signup {...props} />);
    expect(wrapper.state('data')).toEqual({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    expect(wrapper.find('div'));
  });
});
