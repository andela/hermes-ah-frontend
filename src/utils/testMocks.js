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

const bookmarkedArticles = {
  articles: [
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
  ],
};

const userProfile = {
  userProfile: {
    profile: {
      first_name: 'jest',
      last_name: 'enzyme',
    },
  },
};

const articleObj = {
  articles: [],
};

const userFollowingObj = {
  userFollowing: [],
};

const userFolloweeObj = {
  userFollowee: [],
};

const bookmarkObj = {
  articles: [],
};

const userFollowee = {
  imageUrl: '',
  initials: '',
  name: '',
  bio: '',
  button: '',
  btnClass: '',
};

const userFollowing = {
  imageUrl: '',
  initials: '',
  name: '',
  bio: '',
  button: '',
  btnClass: '',
};

const articleReducer = {
  articles: {
    articleData: [
      {
        id: 2,
        author: 'fadad',
        abstract: 'sfsf',
        title: 'fsdsds',
        category: 'gfdfg',
      },
    ],
  },
  getAllArticles: jest.fn(),
};

const userProfileReducer = {
  userProfile: { profile: { fake: 'data' } },
  suggestedResearchers: [
    {
      profile: {
        first_name: 'sam',
        last_name: 'pete',
        id: 'asfnj',
        bio: 'bio',
        image_url: 'image',
      },
      isFollowing: false,
    },
  ],
};

const articleCardProps = {
  id: 2,
  author: 'fadad',
  abstract: 'sfsf',
  title: 'fsdsds',
  category: 'gfdfg',
  date: '2017-11-25T12:34:56z',
  read: 'min',
  paragraph: 'paragraph',
};

const mock = {
  article,
  bookmarkedArticles,
  userProfile,
  userFolloweeObj,
  userFollowingObj,
  bookmarkObj,
  articleObj,
  userFollowee,
  userFollowing,
  articleReducer,
  articleCardProps,
  userProfileReducer,
};

export default mock;
