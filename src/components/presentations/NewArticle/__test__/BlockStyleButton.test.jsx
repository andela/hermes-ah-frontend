import React from 'react';
import { shallow } from 'enzyme';
import EditorButton from '../BlockStyles/BlockStyleButton';

const NewArticleButtonComponent = (
  <EditorButton
    // eslint-disable-next-line react/style-prop-object
    style=""
    onToggle={jest.fn()}
    label={jest.fn()}
    active={jest.fn()}
  />
);

describe('Block style button component', () => {
  it('should match snapshot', () => {
    const wrap = NewArticleButtonComponent;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(NewArticleButtonComponent);
    expect(wrapper.find('button'));
    expect(wrapper.find('form'));
  });
});
