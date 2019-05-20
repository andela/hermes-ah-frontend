import { connect } from 'react-redux';
import RequestAction from '../../actions/reviewers-request.action';
import AdminPage from '../presentations/AdminPage/AdminPage';
import reportedArticleAction from '../../actions/reported.actions';

const { getReportedArticle } = reportedArticleAction;
const { getUserRequests } = RequestAction;
const mapStateToProps = ({ userRequests, reportedArticles }) => ({
  userRequests,
  reportedArticle: reportedArticles.reportedArticle,
});

const AdminpageContainer = connect(
  mapStateToProps,
  {
    getUserRequests,
    getReportedArticle,
  }
)(AdminPage);

export default AdminpageContainer;
