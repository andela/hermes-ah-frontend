import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ForgotPassword from '../ForgotPassword';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const password = (
  <Provider store={store}>
    <ForgotPassword passwordReset={{ isLoading: false }} />
  </Provider>
);

describe('ForgotPssword component', () => {
  it('should match snapshot', () => {
    const wrap = <ForgotPassword />;
    expect(wrap).toMatchSnapshot();
  });

  it('should change state', () => {
    const wrapper = shallow(password);
    expect(wrapper.find('div'));
  });
});
