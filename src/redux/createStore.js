import { createStore as createReduxStore, applyMiddleware } from 'redux';
import reducer from './reducers';
const debug = require('debug')('createStore');

const logger = store => {
    let debug = require('debug')('dispatch');

    return next => action => {
        //console.group(action.type);
        debug('dispatching', action);
        let result = next(action);
        debug('next state', store.getState());
        //console.groupEnd(action.type);
        return result;
    };
};

const createStoreWithMiddleware = applyMiddleware(logger)(createReduxStore);

const createStore = (initialState) => {
    return createStoreWithMiddleware(reducer, initialState);
};

export default createStore;