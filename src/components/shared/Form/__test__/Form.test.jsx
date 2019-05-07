import React from 'react';
import Form from '../Form';

describe('HomePage component', () => {
  it('should match snapshot', () => {
    const wrapper = <Form />;
    expect(wrapper).toMatchSnapshot();
  });
});
