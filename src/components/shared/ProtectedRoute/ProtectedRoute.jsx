import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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

ProtectedRoute.propTypes = {
  render: PropTypes.shape.Object.isRequired,
  location: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};

export default ProtectedRoute;
