import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import createStore from '../redux/createStore';

const AppProvider = (
    <Provider store={createStore()}>
        <App />
    </Provider>
);

export default AppProvider;