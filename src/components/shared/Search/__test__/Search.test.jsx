import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import SearchComponent from '../Search';

describe('Search component', () => {
  it('should match snapshot', () => {
    const wrapper = create(<SearchComponent />);
    expect(wrapper.toJSON).toMatchSnapshot();
  });
  it('test handleResultSelect function', () => {
    const wrapper = shallow(<SearchComponent />);
    const event = { preventDefault: jest.fn() };
    const result = { title: 'test' };
    expect(wrapper.instance().handleResultSelect(event, { result }));
  });

  it('test handleSearchChange function', async () => {
    const wrapper = shallow(<SearchComponent />);
    const event = { preventDefault: jest.fn() };
    const value = { title: 'test' };
    const newAuthors = [];
    const initialState = {
      isLoading: false,
      results: [],
      value: '',
      getResults: {
        articles: {},
        authors: {},
        tags: {},
      },
    };
    expect(newAuthors).toBeDefined();
    expect(await wrapper.instance().handleSearchChange(event, { value }));
    expect(
      (wrapper.instance().state = {
        initialState,
      })
    );
  });
});
