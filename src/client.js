import React from 'react'
import { render } from 'react-dom'
import App from './containers/App';
import createStore from './redux/createStore';
import { greet } from './redux/actions';

require('debug').enable('*');

const store = createStore(window.__INITIAL_STATE__);

render(App.create(store), document.getElementById('app'));