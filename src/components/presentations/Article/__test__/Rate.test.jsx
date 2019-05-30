import React from 'react';
import { shallow, mount } from 'enzyme';
import Rate from '../Rate';
import mock from '../../../../utils/rateDummyData';

describe('<Rate />', () => {
  it('should render rate component', () => {
    const wrapper = shallow(
      <Rate
        articleId={mock.articleId}
        rateArticle={mock.rateArticle}
        likes={mock.likes}
        reportArticle={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });

  it('describe rateHandler function', () => {
    const wrapper = shallow(
      <Rate
        articleId={mock.articleId}
        rateArticle={mock.rateArticle}
        likes={mock.likes}
        reportArticle={jest.fn()}
      />
    );
    const event = { preventDefault: jest.fn() };
    const inputEvent = { target: { id: 'reason', value: 'He stole it' } };
    const value = { rating: 2 };
    expect(wrapper.instance().rateHandler(event, value));
    expect(wrapper.instance().closeModal());
    expect(wrapper.instance().openModal());
    expect(wrapper.instance().handleReportState(inputEvent));
    expect(wrapper.instance().reportAnArticle(event, 'id', value));
  });

  it('describe rateHandler function', () => {
    const wrapper = mount(
      <Rate
        articleId={mock.articleId}
        rateArticle={mock.rateArticle}
        likes={mock.likes}
        reportArticle={jest.fn()}
      />
    );
    expect(wrapper.find('.edit-profile-form').simulate('submit'));
    expect(wrapper.find('#reason').simulate('change'));
    expect(wrapper.find('#comment').simulate('change'));
    expect(wrapper.find('.cancel-btn').simulate('click'));
  });
});
