import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function IndividualRoute ({ component: Component, token, ...rest }) {
  console.log(token);
  return (
    <Route
      {...rest}
      render={props =>
            token
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    } />
  )
}

export default IndividualRoute;
