import { connect } from 'react-redux';
import RequestAction from '../../actions/reviewers-request.action';
import AdminPage from '../presentations/AdminPage/AdminPage';
import reportedArticleAction from '../../actions/reported.actions';
import adminAction from '../../actions/admin.actions';

const { getReportedArticle } = reportedArticleAction;
const { getUserRequests } = RequestAction;
const { acceptRequest, rejectRequest } = adminAction;
const mapStateToProps = ({ userRequests, reportedArticles }) => ({
  userRequests,
  reportedArticle: reportedArticles.reportedArticle,
});

const AdminpageContainer = connect(
  mapStateToProps,
  {
    getUserRequests,
    getReportedArticle,
    acceptRequest,
    rejectRequest,
  }
)(AdminPage);

export default AdminpageContainer;
