import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from '../reducers'

let store = createStore(reducer);

const AppProvider = (
    <Provider store={store}>
        <App />
    </Provider>
);

export default AppProvider;