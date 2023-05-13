import IndexController from '../controllers/index.controller';
import urlShortenerModule from '../modules/url-shortener.module';
import Route from './route';

class IndexRoute extends Route {
  private indexController = new IndexController(urlShortenerModule);

  constructor() {
    super();
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.get('/app', this.indexController.rednerHomePage.bind(this.indexController));
    this.router.get('/', this.indexController.redirectURL.bind(this.indexController));
  }
}

export default IndexRoute;
