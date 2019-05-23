import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../Form';

describe('HomePage component', () => {
  it('should match snapshot', () => {
    const wrapper = <Form />;
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot renderInput', () => {
    const wrapper = renderer.create(<Form />);
    const inst = wrapper.getInstance();
    expect(inst.renderInput('text', 'text')).toMatchSnapshot();
    expect(inst.renderInput('test1', 'test1', 'password')).toMatchSnapshot();
    expect(inst.renderInput('test2', 'test2', 'email')).toMatchSnapshot();
  });

  it('should match snapshot renderSocialLogin', () => {
    const wrapper = renderer.create(<Form />);
    const inst = wrapper.getInstance();
    expect(inst.renderSocialLogin()).toMatchSnapshot();
  });

  it('should match snapshot renderRuler', () => {
    const wrapper = renderer.create(<Form />);
    const inst = wrapper.getInstance();
    expect(inst.renderRuler()).toMatchSnapshot();
  });

  it('always renders a div', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find('div'));
  });

  it('test handle change function', () => {
    const wrapper = shallow(<Form />);
    const event = { currentTarget: { id: 'title', value: 'prof' } };
    expect(wrapper.instance().handleChange(event));
  });
});
