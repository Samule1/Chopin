/* Main file for combining all available reducers */
/* Reducers specify how the application's state changes
in response to actions sent to the store. An action just says that
something happend, not how the state chhanges as a result */

import { combineReducers } from 'redux';
import { sign_up } from './sign_up_reducer';

const rootReducer = combineReducers({
  sign_up
});

export default rootReducer;
