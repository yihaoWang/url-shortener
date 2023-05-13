import ShortenerController from '../controllers/shortener.controller';
import shortUrlGenerator from '../modules/short-url-generator.module';
import urlShortenerModule from '../modules/url-shortener.module';
import urlValiderModule from '../modules/url-valider.module copy';
import Route from './route';

class ShortenerRoute extends Route {
  private shortenerController = new ShortenerController(
    shortUrlGenerator,
    urlShortenerModule,
    urlValiderModule,
  );

  constructor() {
    super();
    this.prefix = '/url';
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.post('/', this.shortenerController.shortURL.bind(this.shortenerController));
    this.router.get('/', this.shortenerController.redirectURL.bind(this.shortenerController));
  }
}

export default ShortenerRoute;
