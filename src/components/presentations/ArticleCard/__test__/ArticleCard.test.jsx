import React from 'react';
import { shallow } from 'enzyme';
import ArticleCard from '../Article';

const article = {
  id: 1,
  category: 'Health',
  title: 'World’s Smallest Biggest Killer',
  author: 'Andrew Moffins',
  date: 'March 26 2019',
  read: '1 min read',
  paragraph:
    'The world’s biggest killers are in fact so tiny - the mosquito. Worldwide there are 3500 known species of mosquito. Which are the deadliest the mosquito. Worldwide there are 3500 known species of mosquito...',
  image:
    'https://res.cloudinary.com/walsam/image/upload/v1556790931/robotics.jpg',
};

describe('<ArticleCard />', () => {
  it('renders article', () => {
    const wrapper = shallow(
      <ArticleCard
        key={article.id}
        category={article.category}
        title={article.title}
        author={article.author}
        date={article.date}
        read={article.read}
        paragraph={article.paragraph}
        image={article.image}
      />
    );
    expect(wrapper.find('div'));
  });
});
