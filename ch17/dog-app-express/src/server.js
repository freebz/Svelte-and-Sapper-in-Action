import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import {json} from 'body-parser';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
  .use(json())
  .use(
    compression({ threshold: 0 }),
    express.static('static'),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
