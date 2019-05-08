import React from 'react';
import Login from '../Login';

describe('Login component', () => {
  it('should match snapshot', () => {
    const wrap = <Login />;
    expect(wrap).toMatchSnapshot();
  });
});
