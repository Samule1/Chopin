import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../store'

function IndividualRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
            store.getState().login.isAuthorized
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    } />
  )
}

export default IndividualRoute;
