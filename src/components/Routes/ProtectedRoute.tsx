import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to={{ pathname: "/signIn", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;