import path from 'path';
import express from 'express';
import morgan from 'morgan';

import router from './router';
import { errorHandler } from './middlewares/error-hander.middleware';

const app:express.Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

router.forEach((route) => {
  app.use(route.getPrefix(), route.getRouter());
});
app.use(errorHandler);

export default app;
