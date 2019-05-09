import React from 'react';
import { shallow } from 'enzyme';
import Article from '../Article';

const bookmarkedArticles = [
  {
    id: 1,
    title: 'This is a cat',
    abstract: 'March 3 2019',
    image:
      'https://res.cloudinary.com/walsam/image/upload/v1556790944/brain-2062057_640.jpg',
    readTime: 3,
  },
  {
    id: 2,
    title: 'This is a dog',
    abstract: 'March 23 2019',
    image:
      'https://res.cloudinary.com/walsam/image/upload/v1556790944/brain-2062057_640.jpg',
    readTime: 3,
  },
  {
    id: 3,
    title: 'This is a fish',
    abstract: 'March 13 2019',
    image:
      'https://res.cloudinary.com/walsam/image/upload/v1556790944/brain-2062057_640.jpg',
    readTime: 3,
  },
];

const BookmakedComponent = (
  <div>
    {bookmarkedArticles.map(item => (
      <Article
        key={item.id}
        title={item.title}
        abstract={item.abstract}
        image={item.image}
        readTime={item.readTime}
      />
    ))}
  </div>
);

describe('<ArticleCard />', () => {
  it('should render bookmark component', () => {
    const wrapper = shallow(BookmakedComponent);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
