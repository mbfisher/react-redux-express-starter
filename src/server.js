import express from 'express';
import path from 'path';
import App from './containers/App';
import { renderToString } from 'react-dom/server';
import createStore from './redux/createStore';
import React from 'react';
const debug = require('debug')('server');

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../static')));

function renderPage(content, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
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

app.use(function serverRender(req, res, next) {
    const store = createStore();
    const content = renderToString(App.create(store));
    res.send(renderPage(content, store.getState()));
});

app.listen(process.env.PORT || 3000);