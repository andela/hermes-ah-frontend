import React from 'react';
import { shallow } from 'enzyme';
import AdminTab from '../AdminTab';
import AdminTabButton from '../AdminTabButton';

describe('AdminTab and AdminTabButton component', () => {
  it('should render Admin tab component', () => {
    const props = {
      changeTab: jest.fn(),
      currentTab: 'admin-tab',
    };
    const wrapper = shallow(<AdminTab {...props} />);
    expect(wrapper.find('div'));
  });

  it('should render Admin tab button component', () => {
    const btnProps = {
      value: 'article-section',
      onClick: jest.fn(),
      className: 'admin-btn-active',
    };
    const wrapper = shallow(<AdminTabButton {...btnProps} />);
    expect(wrapper.find('div'));
  });
});
