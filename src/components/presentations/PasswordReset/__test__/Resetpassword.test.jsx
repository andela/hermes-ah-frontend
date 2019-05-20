import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from '../ResetPassword';
import { setToken } from '../../../../utils/authService';

describe('ForgotPssword component', () => {
  const props = {
    search: setToken('token'),
    isLoadingReducer: { loader: true },
    user: { userProfile: {} },
    location: {
      search: 'eqial=to',
    },
  };
  it('should match snapshot', () => {
    const wrap = <ResetPassword />;
    expect(wrap).toMatchSnapshot();
  });

  it('should change state', () => {
    const wrapper = shallow(<ResetPassword {...props} />);
    expect(wrapper.find('div'));
    expect(wrapper.state('data')).toEqual({
      password: '',
      confirmPassword: '',
    });
  });
});
