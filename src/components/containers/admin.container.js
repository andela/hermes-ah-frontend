import { connect } from 'react-redux';
import RequestAction from '../../actions/reviewers-request.action';
import AdminPage from '../presentations/AdminPage/AdminPage';

const { getUserRequests } = RequestAction;
const mapStateToProps = ({ userRequests }) => ({
  userRequests,
});

const AdminpageContainer = connect(
  mapStateToProps,
  {
    getUserRequests,
  }
)(AdminPage);

export default AdminpageContainer;
