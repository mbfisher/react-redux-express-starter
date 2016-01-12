import React from 'react'
import { render } from 'react-dom'
import App from './containers/App';
import createStore from './redux/createStore';
import createRoutes from './createRoutes';
import { browserHistory } from 'react-router';
import { greet } from './redux/actions';

require('debug').enable('*');

const store = createStore(browserHistory, window.__INITIAL_STATE__);
const routes = createRoutes(store, browserHistory);

render(routes, document.getElementById('app'));