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

describe('<Bookmarked />', () => {
  it('should render bookmark component', () => {
    const wrapper = shallow(BookmakedComponent);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});

describe('<Bookmarked />', () => {
  it('should render bookmark component', () => {
    const props = {
      bookmarkedArticles,
    };

    const wrapper = shallow(<Bookmarked {...props} />);
    expect(wrapper.find('div'));
  });
});
