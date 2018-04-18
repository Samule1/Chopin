import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const loggerMiddleware = createLogger();

export const Store = createStore(
    rootReducer,
    /* Thunk allows us to write action creators that return a function
    instead of an action (Dispatch) */

    /* Logger is a debugging tool (https://github.com/evgenyrodionov/redux-logger) */
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
