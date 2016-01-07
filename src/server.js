import express from 'express';
import path from 'path';
import Provider from './containers/Provider';
import Html from './containers/Html';
import ReactDOM from 'react-dom/server';
import React from 'react';

const app = express();

app.use(express.static(path.resolve(__dirname, '../static')));

app.use((req, res, next) => {
    const content = ReactDOM.renderToString(Provider);
    res.send(ReactDOM.renderToStaticMarkup(<Html content={content}/>));
});

app.listen(process.env.PORT || 3000);