import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from '../Login';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const LoginComponent = (
  <Provider store={store}>
    <Login auth={{ isLoading: true }} />
  </Provider>
);

describe('Login component', () => {
  it('should match snapshot', () => {
    const wrap = <Login />;
    expect(wrap).toMatchSnapshot();
  });

  it('always renders a div', () => {
    const wrapper = shallow(LoginComponent);
    expect(wrapper.find('div'));
  });
});
