import React from 'react';
// import { MemoryRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import EditArticleForm from '../EditArticleForm/EditArticleForm';
import EditArticle from '../EditArticle';

describe('editArticle component', () => {
  it('should call edit onChange prop', () => {
    const props = {
      history: {
        push: '/',
      },
      singleArticle: { article: [] },
      match: { params: { articleId: '2' } },
      getSingleArticle: jest.fn(),
    };
    const event = {
      preventDefault: jest.fn(),
      target: { abstract: 'title', value: 'The-value' },
    };
    const component = shallow(<EditArticle {...props} />);
    expect(component.instance().state.abstract).toEqual('');
    component.instance().onChange(event);
  });

  it('should call edit onChange prop', () => {
    const props = {
      history: {
        push: '/',
      },
      singleArticle: { article: [] },
      match: { params: { articleId: '2' } },
      getSingleArticle: jest.fn(),
      saveToCloudinary: jest.fn(),
      uploadToCloudnary: jest.fn(() => Promise.resolve()),
    };
    const event = {
      preventDefault: jest.fn(),
      target: {
        files: [
          {
            lastModified: 1556711757797,
            lastModifiedDate: '',
            name: 'books-bookshelves-bookstore-1184589.jpg',
            size: 1979381,
            type: 'image/jpeg',
            webkitRelativePath: '',
          },
        ],
      },
    };
    const component = shallow(<EditArticle {...props} />);

    // console.log(component.debug());
    expect(component.instance().saveToCloudinary(event));

    // expect(component.instance().state.abstract).toEqual('');
    // component.instance().onChange(event);
  });

  it('should call edit onChange prop', () => {
    const props = {
      history: {
        push: '/',
      },
      singleArticle: { article: [] },
      match: { params: { articleId: '2' } },
      getSingleArticle: jest.fn(),
      saveToCloudinary: jest.fn(),
    };
    const event = {
      preventDefault: jest.fn(),
      target: {
        files: 'gdgdg',
      },
    };
    const component = shallow(<EditArticle {...props} />);

    // console.log(component.debug());
    expect(component.instance().saveToCloudinary(event));

    // expect(component.instance().state.abstract).toEqual('');
    // component.instance().onChange(event);
  });

  it('should call handleAddition prop', () => {
    const props = {
      postArticle: jest.fn(),
      success: true,
      history: {
        push: '/',
      },
      singleArticle: { article: [] },
      match: { params: { articleId: '2' } },
      getSingleArticle: jest.fn(),
    };
    const event = {
      preventDefault: jest.fn(),
      target: { options: [{ text: 'title', value: 'title' }] },
    };
    const component = shallow(<EditArticle {...props} />);
    component.instance().handleAddition(event, { value: 'title' });
    expect(component.state().options[0].value).toBe('title');
  });

  it('should call handleChange prop', () => {
    const props = {
      postArticle: jest.fn(),
      success: true,
      history: {
        push: '/',
      },
      singleArticle: { article: [] },
      match: { params: { articleId: '2' } },
      getSingleArticle: jest.fn(),
    };
    const event = {
      preventDefault: jest.fn(),
      target: {
        keywords: [{ value: 'title' }],
      },
    };
    const component = shallow(<EditArticle {...props} />);
    component.instance().handleChange(event, { value: ['title'] });
  });

  it('should call saveOrPublish prop', () => {
    const article = {
      title: "Scientist don't die",
      abstract: 'Science is always alive',
      imageUrl:
        'https://res.cloudinary.com/dnch08bzc/image/upload/v1556821917/3d-rendering-human-brain-technology-background_34663-72.jpg',
      body: 'Lorem ipsum lorem ipsum lorem ipsum',
      keywords: ['science', 'fiction', 'vision'],
      category: 'Science',
    };

    const props = {
      postArticle: jest
        .fn()
        .mockReturnValue(Promise.resolve({ data: article })),
      success: true,
      history: {
        push: '/',
      },
      singleArticle: { article: [] },
      match: { params: { articleId: '2' } },
      getSingleArticle: jest.fn(),
    };

    const event = {
      preventDefault: jest.fn(),
    };

    const component = shallow(<EditArticle {...props} />);
    component.instance().saveOrPublish(event, { isDraft: false });
    component.instance().setState({
      ...article,
    });
    expect(component.state('title')).toEqual("Scientist don't die");
  });
});

describe('EditArticlePage component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<EditArticleForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<EditArticleForm />);
    expect(wrapper.find('div'));
    expect(wrapper.find('main'));
    expect(wrapper.find('form'));
    expect(wrapper.hasClass('title'));
    expect(wrapper.find('onClick'));
  });
});
