import React from 'react';
import { shallow } from 'enzyme';
import Article from '../Article';

const articles = [
  {
    id: 1,
    title: 'This is a wild fish',
    abstract: 'June 3 2019',
    image:
      'https://res.cloudinary.com/walsam/image/upload/v1556790931/robotics.jpg',
    readTime: 1,
  },
  {
    id: 2,
    title: 'There is a way that seem right to many',
    abstract: 'December 22 2019',
    image:
      'https://res.cloudinary.com/walsam/image/upload/v1556790931/robotics.jpg',
    readTime: 7,
  },
];

const ArticleComponent = (
  <div>
    {articles.map(item => (
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
    const wrapper = shallow(ArticleComponent);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
