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

  it('test the constructor', () => {
    const expectedProps = {
      articleId: 'asdf',
      rateArticle: () => {},
      likes: 1,
    };
    const rate = new Rate(expectedProps);
    expect(rate.state).toStrictEqual({});
  });

  it('describe rate function', () => {
    const wrapper = shallow(
      <Rate
        articleId={mock.articleId}
        rateArticle={mock.rateArticle}
        likes={mock.likes}
      />
    );
    expect(wrapper.instance().rate());
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
