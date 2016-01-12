import express from 'express';
import path from 'path';
import App from './containers/App';
import { renderToString } from 'react-dom/server';
import createStore from './redux/createStore';
import createRoutes from './createRoutes';
import React from 'react';
import { match, RouterContext } from 'react-router'
import createMemoryHistory from 'history/lib/createMemoryHistory';
const debug = require('debug')('server');

const app = express();

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.resolve(__dirname, '../static')));

function renderPage(content, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>React Starter</title>
      </head>
      <body>
        <div id="app">${content}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
   `
}

const history = createMemoryHistory();
const store = createStore(history);
const routes = createRoutes(store, history);

app.use(function serverRender(req, res, next) {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            const content = renderToString(<RouterContext {...renderProps} />);
            res.status(200).send(renderPage(content, store.getState()))
        } else {
            res.status(404).send('Not found')
        }
    });
});

app.listen(app.get('port'), () => {
    debug("Server listening on " + app.get('host') + ":" + app.get('port'));
});

process.on('SIGTERM', () => {
    app.close();
});