import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from '../ResetPassword';

describe('ForgotPssword component', () => {
  it('should match snapshot', () => {
    const wrap = <ResetPassword />;
    expect(wrap).toMatchSnapshot();
  });

  it('should change state', () => {
    const wrapper = shallow(
      <ResetPassword isLoadingReducer={{ loader: true }} />
    );
    expect(wrapper.find('div'));
    expect(wrapper.state('data')).toEqual({
      password: '',
      confirmPassword: '',
    });
  });
});
