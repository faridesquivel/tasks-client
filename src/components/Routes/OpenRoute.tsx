import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props => <Component {...props}/>
      }
    />
  );
};

export default PrivateRoute;