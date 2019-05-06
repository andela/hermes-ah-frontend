import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Form } from 'semantic-ui-react';
import thunk from 'redux-thunk';
import Login from '../Login';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const LoginComponent = (
  <Provider store={store}>
    <Login auth={{ isLoading: false }} />
  </Provider>
);

describe('Login component', () => {
  const wrapper = shallow(LoginComponent);

  it('should match snapshot', () => {
    const wrap = <Login />;
    expect(wrap).toMatchSnapshot();
  });

  it('always renders a div', () => {
    expect(wrapper.find(<Form />));
    expect(wrapper.find('div'));
    expect(wrapper.length).toBeGreaterThan(0);
  });

  it('always renders a form', () => {
    expect(wrapper.find(<Form />));
  });
});
