import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Articles from '../Articles';

const updateArticle = {
  title: 'This is a cat',
  date: 'March 3 2019',
  isDraft: true,
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ updateArticle });

const UserArticleComponent = (
  <Provider store={store}>
    <Articles updateArticle={updateArticle} />
  </Provider>
);

describe('<ArticleCard />', () => {
  it('should render profile page', () => {
    const wrapper = shallow(UserArticleComponent);
    expect(wrapper.find('div'));
  });
});
