import { createStore as createReduxStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
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


const createStore = (history, initialState) => {
    const createStoreWithMiddleware = applyMiddleware(logger)(createReduxStore);

    const reducer = combineReducers({...reducers,
        routing: routeReducer
    });

    const store = createStoreWithMiddleware(reducer, initialState);

    syncReduxAndRouter(history, store);

    return store;
};

export default createStore;