import React from 'react';
import { shallow } from 'enzyme';
import Rate from '../Rate';
import mock from '../../../../utils/rateDummyData';

describe('<Rate />', () => {
  it('should render rate component', () => {
    const wrapper = shallow(
      <Rate
        articleId={mock.articleId}
        rateArticle={mock.rateArticle}
        likes={mock.likes}
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
      />
    );
    const event = { preventDefault: jest.fn() };
    const value = { rating: 2 };
    expect(wrapper.instance().rateHandler(event, value));
  });
});
