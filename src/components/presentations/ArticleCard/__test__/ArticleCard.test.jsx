import React from 'react';
import { shallow } from 'enzyme';
import ArticleCard from '../Article';
import mock from '../../../../utils/testMocks';

const { article } = mock;

describe('<ArticleCard />', () => {
  const props = {
    key: article.id,
    category: article.category,
    title: article.title,
    author: article.author,
    date: article.date,
    read: article.read,
    paragraph: article.paragraph,
    image: article.image,
  };
  it('renders article', () => {
    const wrapper = shallow(<ArticleCard {...props} />);
    expect(wrapper.find('div'));
    expect(wrapper.toJSON).toMatchSnapshot();
  });
});
