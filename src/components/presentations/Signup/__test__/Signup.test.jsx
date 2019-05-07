import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Signup from '../Signup';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const SignupComponent = (
  <Provider store={store}>
    <Signup auth={{ isLoading: false }} />
  </Provider>
);

describe('Login component', () => {
  it('should match snapshot', () => {
    const wrap = <Signup />;
    expect(wrap).toMatchSnapshot();
  });

  it('always renders a div', () => {
    const wrapper = shallow(SignupComponent);
    expect(wrapper.find('div'));
  });
});
