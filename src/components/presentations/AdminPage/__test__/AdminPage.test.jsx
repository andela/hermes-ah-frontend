import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ReportedArticles from '../ReportedArticles';
import ReviewedArticles from '../../ReviewedArticles/ReviewedArticles';
import AdminPage from '../AdminPage';
import RequestList from '../../ReviewerRequests/Requests/Requests';
import ReviewerRequestCard from '../../ReviewerRequests/ReviewersCard/Reviewers-card';
import mock from '../../../../utils/testMocks';

const {
  reportedArticleProps,
  reviewedArticleProps,
  reviewerRequestProps,
} = mock;

const props = {
  getUserRequests: jest.fn(),
  getReportedArticle: jest.fn(),
  adminAcceptRequest: jest.fn(),
  adminRejectRequest: jest.fn(),
  reviewerRequestProps,
  reportedArticleProps,
};

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const AdminPageCont = (
  <Provider store={store}>
    <AdminPage {...props} />
  </Provider>
);

describe('AdminPage component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(AdminPageCont);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Admin page without crashing', () => {
    const wrapper = shallow(<AdminPage {...props} />);
    expect(wrapper.find('NavBar'));
  });

  it('should render ReviewerRequest without crashing', () => {
    const wrapper = shallow(<RequestList {...reviewerRequestProps} />);
    expect(wrapper.find('div'));
  });

  it('should render ReviewedArticles without crashing', () => {
    const wrapper = shallow(<ReviewedArticles {...reviewedArticleProps} />);
    expect(wrapper.find('div'));
  });

  it('should render ReportedArticles without crashing', () => {
    const wrapper = shallow(<ReportedArticles {...reportedArticleProps} />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(
      <ReviewerRequestCard
        initials=""
        imageUrl=""
        bio=""
        name=""
        button=""
        button1=""
        btnClass1=""
        btnClass=""
        adminAcceptRequest=""
        adminRejectRequest=""
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
