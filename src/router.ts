import IndexRoute from './routes/index.route';
import ShortenerRoute from './routes/shortener.route';
import Route from './routes/route';

const router: Array<Route> = [
  new IndexRoute(),
  new ShortenerRoute(),
];

export default router;
