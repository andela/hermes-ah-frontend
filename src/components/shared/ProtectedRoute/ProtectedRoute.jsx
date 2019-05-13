import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { decodeToken } from '../../../utils/authService';

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!decodeToken())
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

ProtectedRoute.defaultProps = {
  location: null,
  render: null,
};

ProtectedRoute.propTypes = {
  component: PropTypes.shape().isRequired,
  render: PropTypes.shape(),
  location: PropTypes.shape(),
};

export default ProtectedRoute;
