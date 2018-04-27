/* Main file for combining all available reducers */
/* Reducers specify how the application's state changes
in response to actions sent to the store. An action just says that
something happend, not how the state changes as a result */

import { combineReducers } from 'redux';
//import loginReducer from './loginReducer';
import graphReducer from './graphReducer';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  graph: graphReducer,
  login: loginReducer,
  profile: profileReducer
});
