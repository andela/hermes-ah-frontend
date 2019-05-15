import React from 'react';
import { shallow } from 'enzyme';
import ForgotPassword from '../ForgotPassword';

describe('ForgotPssword component', () => {
  it('should match snapshot', () => {
    const wrap = <ForgotPassword />;
    expect(wrap).toMatchSnapshot();
  });

  it('should change state', () => {
    const wrapper = shallow(
      <ForgotPassword
        isLoadingReducer={{ loader: true }}
        user={{ userProfile: {} }}
      />
    );
    expect(wrapper.find('div'));
    expect(wrapper.state('data')).toEqual({
      email: '',
    });
    wrapper.setProps({ isLoading: true });
  });
});
