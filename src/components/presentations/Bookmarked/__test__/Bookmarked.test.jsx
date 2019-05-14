import React from 'react';
import { shallow } from 'enzyme';
import Bookmarked from '../Bookmaked';
import mock from '../../../../utils/testMocks';

const { bookmarkedArticles } = mock;

const BookmakedComponent = (
  <div>
    <Bookmarked bookmarkedArticles={bookmarkedArticles} />
  </div>
);

describe('<ArticleCard />', () => {
  it('should render bookmark component', () => {
    const wrapper = shallow(BookmakedComponent);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
