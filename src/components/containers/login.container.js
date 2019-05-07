import { connect } from 'react-redux';
import Login from '../presentations/Login/Login';
import { login } from '../../actions/auth.actions';
import createLoadingSelector from '../../selector/selector';
import loadingConstant from '../../constants/auth.constants';

const loadingSelector = createLoadingSelector([
  loadingConstant.CONTENT_LOADING,
]);

const mapStateToProps = state => ({
  isLoadingReducer: loadingSelector(state),
});

const LoginContainer = connect(
  mapStateToProps,
  { login }
)(Login);

export default LoginContainer;
