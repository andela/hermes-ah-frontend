import React from 'react';
import { shallow } from 'enzyme';
import NewArticleForm from '../NewArticleForm/NewArticleForm';
import NewArticle from '../NewArticle';

describe('newArticle component', () => {
  it('should call onChange prop', () => {
    const props = {
      postArticle: jest.fn(),
      success: true,
      history: {
        push: '/',
      },
    };
    const event = {
      preventDefault: jest.fn(),
      target: { name: 'title', value: 'The-value' },
    };
    const component = shallow(<NewArticle {...props} />);
    expect(component.instance().state.title).toEqual('');
    component.instance().onChange(event);
    expect(component.instance().state.title).toEqual('the-value');
  });

  it('should call handleAddition prop', () => {
    const props = {
      postArticle: jest.fn(),
      success: true,
      history: {
        push: '/',
      },
    };
    const event = {
      preventDefault: jest.fn(),
      target: { options: [{ text: 'title', value: 'title' }] },
    };
    const component = shallow(<NewArticle {...props} />);
    expect(component.state().keywords).toEqual([]);
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
    };
    const event = {
      preventDefault: jest.fn(),
      target: {
        keywords: [{ value: 'title' }],
      },
    };
    const component = shallow(<NewArticle {...props} />);
    expect(component.state().keywords).toEqual([]);
    component.instance().handleChange(event, { value: ['title'] });
    expect(component.instance().state.keywords[0]).toEqual('title');
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
    };

    const event = {
      preventDefault: jest.fn(),
    };

    const component = shallow(<NewArticle {...props} />);
    component.instance().saveOrPublish(event, { isDraft: false });
    component.instance().setState({
      ...article,
    });
    expect(component.state('title')).toEqual("Scientist don't die");
  });
});

describe('NewArticlePage component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NewArticleForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<NewArticleForm />);
    expect(wrapper.find('div'));
    expect(wrapper.find('main'));
    expect(wrapper.find('form'));
    expect(wrapper.hasClass('title'));
    expect(wrapper.find('onClick'));
  });
});
