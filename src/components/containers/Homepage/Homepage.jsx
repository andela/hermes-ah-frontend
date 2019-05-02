import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import ArticleCard from '../../presentations/Article-Card/Article';
import PopularArticleCard from '../../presentations/PopularArticleCard/PopularArticleCard';

const article = [
  {
    id: 1,
    title: 'World’s Smallest Biggest Killer',
    author: 'Andrew Moffins',
    date: 'March 26 2019',
    read: '1 min read',
    paragraph:
      'The world’s biggest killers are in fact so tiny - the mosquito. Worldwide there are 3500 known species of mosquito. Which are the deadliest the mosquito. Worldwide there are 3500 known species of mosquito...',
    image:
      'https://res.cloudinary.com/walsam/image/upload/v1556790931/robotics.jpg',
  },
  {
    id: 2,
    title: 'Building Realtime Android Chat Room With Firebase ',
    author: 'Peter Emmanuel',
    date: 'March 13 2019',
    read: '1 min read',
    paragraph:
      'Firebase efficiently handles the backend process associated with authentication cloud storage, real-time database, and push notification while you focus...',
    image:
      'https://res.cloudinary.com/walsam/image/upload/v1556790944/brain-2062057_640.jpg',
  },
];

const popularArticle = [
  {
    id: 1,
    title: 'The Sticky Details Behind Apple’s Credit card',
    author: 'John Shanghai',
    date: 'March 3',
    likes: 21,
  },
  {
    id: 2,
    title: 'Cyber Monday Disaster for Tech Savvy consumers',
    author: 'April Juliet',
    date: 'March 13',
    likes: 11,
  },
];

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header as="h2">Welcome to Authors Haven</Header>
        <Container text>
          {article.map(item => (
            <ArticleCard
              key={item.id}
              title={item.title}
              author={item.author}
              date={item.date}
              read={item.read}
              paragraph={item.paragraph}
              image={item.image}
            />
          ))}
        </Container>
        <Container text className="popular-articles-card">
          {popularArticle.map(elem => (
            <PopularArticleCard
              key={elem.id}
              title={elem.title}
              author={elem.author}
              date={elem.date}
              likes={elem.likes}
            />
          ))}
        </Container>
      </Container>
    );
  }
}

export default Homepage;
