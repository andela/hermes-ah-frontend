import http from './httpService';

const article = [
  {
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
  },
  {
    id: 2,
    category: 'Chemistry',
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

const user = {
  email: 'ameachichuks@gmail.com',
  password: '12345678',
};

const loginUser = async () => {
  localStorage.clear();
  const { data } = await http.post('/auth/login', user);
  localStorage.setItem('token', data.user.token);
};

const data = {
  article,
  popularArticle,
  loginUser,
};

export default data;
