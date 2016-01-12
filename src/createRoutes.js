import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import App from './containers/App';
import React from 'react';

const createRoutes = (store, history) => {
    return (
        <Router history={history}>
            <Route path="/" component={App.connect(store)}/>
        </Router>
    );
};

export default createRoutes;